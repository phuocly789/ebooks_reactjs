import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { deleteCart } from '@/api/cartService';

function Checkout() {
    const { listProductCart, handleGetListProductsCart } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessLink, setShowSuccessLink] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const userId = Cookies.get('userId');

    const { product } = location.state || {};
    const cartItems = product ? [product] : listProductCart;

    const totalAmount = cartItems.reduce((acc, item) => acc + (item.total || item.price * item.quantity), 0);

    const handleVNPayPayment = async () => {
        if (!userId) {
            toast.error('Vui lòng đăng nhập để thanh toán!');
            navigate('/login');
            return;
        }

        if (!cartItems.length) {
            toast.error('Giỏ hàng trống!');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setShowSuccessLink(true);
            setLoading(false);
        }, 1500);
    };

    const handleTempPayment = async () => {
        if (!userId) {
            toast.error('Vui lòng đăng nhập để thanh toán!');
            navigate('/login');
            return;
        }

        if (!cartItems.length) {
            toast.error('Giỏ hàng trống!');
            return;
        }

        setIsModalOpen(true);
    };

    const handleConfirmPayment = async () => {
        try {
            await deleteCart({ userId });
            await handleGetListProductsCart(userId, 'cart');
            toast.success('Thanh toán thành công!');
            setIsModalOpen(false);

            navigate('/');
        } catch (error) {
            console.error('Lỗi khi xóa giỏ hàng:', error);
            toast.error('Lỗi khi xử lý thanh toán!');
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.checkoutContainer}>
            <h2>Thanh toán</h2>
            <div className={styles.orderSummary}>
                <h3>Tóm tắt đơn hàng</h3>
                {cartItems.length ? (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - Số lượng: {item.quantity} - Giá: ${(item.total || item.price * item.quantity).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Giỏ hàng trống</p>
                )}
                <h4>Tổng tiền: ${totalAmount.toFixed(2)}</h4>
            </div>

            {showSuccessLink && (
                <div className={styles.successLink}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleTempPayment();
                        }}
                        className={styles.successAnchor}
                    >
                        Thanh toán thành công
                    </a>
                </div>
            )}
            <Button
                content={loading ? <LoadingTextCommon /> : 'Thanh toán bằng VNPay'}
                onClick={handleVNPayPayment}
                disabled={loading}
            />


            <Button
                content="Quay lại"
                isPrimary={false}
                onClick={() => navigate('/cart')}
            />

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h3>Xác nhận thanh toán</h3>
                        <p>Thanh toán thành công! Bạn có muốn tiếp tục?</p>
                        <div className={styles.modalActions}>
                            <button
                                onClick={handleCloseModal}
                                className={styles.cancelBtn}
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleConfirmPayment}
                                className={styles.confirmBtn}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
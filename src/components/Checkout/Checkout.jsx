import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

function Checkout() {
    const { listProductCart, handleGetListProductsCart } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const userId = Cookies.get('userId');

    // Kiểm tra nếu có sản phẩm từ ProductItem (thanh toán nhanh)
    const { product } = location.state || {};
    const cartItems = product ? [product] : listProductCart;

    // Tính tổng tiền
    const totalAmount = cartItems.reduce((acc, item) => acc + (item.total || item.price * item.quantity), 0);

    // Xử lý thanh toán VNPay
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

        console.log('Dữ liệu gửi đi:', {
            amount: totalAmount,
            userId,
            returnUrl: window.location.origin + '/payment-result',
            bankCode: 'VNBANK',
            orderId: `ORDER_${Date.now()}`,
        });

        setLoading(true);
        try {
            // Thay bằng URL Vercel của bạn
            const response = await fetch('https://ecommerse-reactjs-main.vercel.app/api/vnpay-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: totalAmount,
                    userId,
                    returnUrl: window.location.origin + '/payment-result',
                    bankCode: 'VNBANK',
                    orderId: `ORDER_${Date.now()}`,
                }),
            });

        console.log('Phản hồi:', {
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
        });

        if (!response.ok) {
            throw new Error(`Lỗi HTTP: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        console.log('Nội dung phản hồi:', text);

        let data;
        try {
            data = JSON.parse(text);
        } catch (jsonError) {
            throw new Error(`Lỗi parse JSON: ${jsonError.message}. Nội dung: ${text}`);
        }

        const { paymentUrl } = data;
        if (paymentUrl) {
            window.location.href = paymentUrl;
        } else {
            throw new Error('Không có paymentUrl trong phản hồi');
        }
    } catch (error) {
        console.error('Chi tiết lỗi:', error);
        toast.error('Lỗi khi xử lý thanh toán: ' + error.message);
    } finally {
        setLoading(false);
    }
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
    </div>
);
}

export default Checkout;
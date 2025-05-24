import { useEffect, useContext } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentResult() {
  const { toast } = useContext(ToastContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const vnp_ResponseCode = query.get('vnp_ResponseCode');
    const vnp_TxnRef = query.get('vnp_TxnRef');

    if (vnp_ResponseCode === '00') {
      toast.success(`Thanh toán đơn hàng ${vnp_TxnRef} thành công!`);
      navigate('/order-confirmation');
    } else {
      toast.error(`Thanh toán đơn hàng ${vnp_TxnRef} thất bại!`);
      navigate('/checkout');
    }
  }, [location, toast, navigate]);

  return <div>Đang xử lý kết quả thanh toán...</div>;
}

export default PaymentResult;
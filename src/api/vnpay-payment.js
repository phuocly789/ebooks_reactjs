const crypto = require('crypto');

module.exports = (req, res) => {
    try {
        const { amount, orderId, userId, returnUrl, bankCode } = req.body;
        const vnp_TmnCode = 'VLQ7W9CS'; // Thay bằng mã VNPay Sandbox của bạn
        const vnp_HashSecret = 'F1ZHK1GCTWQAES1CZH1ZVNUJO8YSRVCZ'; // Thay bằng khóa bí mật
        const vnp_Url = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';

        if (!amount || !userId || !returnUrl) {
            return res.status(400).json({ error: 'Thiếu tham số bắt buộc' });
        }

        const startTime = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
        const expire = new Date(Date.now() + 15 * 60 * 1000)
            .toISOString()
            .replace(/[^0-9]/g, '')
            .slice(0, 14);

        let vnp_Params = {
            vnp_Version: '2.1.0',
            vnp_Command: 'pay',
            vnp_TmnCode,
            vnp_Amount: Math.round(amount * 100),
            vnp_CurrCode: 'VND',
            vnp_TxnRef: orderId || `ORDER_${Date.now()}`,
            vnp_OrderInfo: `Thanh toan don hang ${orderId || `ORDER_${Date.now()}`} cho user ${userId}`,
            vnp_OrderType: 'other',
            vnp_Locale: 'vn',
            vnp_ReturnUrl: returnUrl,
            vnp_IpAddr: req.headers['x-forwarded-for'] || req.ip || '0.0.0.0',
            vnp_CreateDate: startTime,
            vnp_ExpireDate: expire,
        };

        if (bankCode) {
            vnp_Params.vnp_BankCode = bankCode;
        }

        const sortedParams = Object.keys(vnp_Params)
            .sort()
            .reduce((result, key) => {
                result[key] = vnp_Params[key];
                return result;
            }, {});

        const queryString = new URLSearchParams(sortedParams).toString();
        const vnp_SecureHash = crypto.createHmac('sha512', vnp_HashSecret).update(queryString).digest('hex');
        vnp_Params.vnp_SecureHash = vnp_SecureHash;

        const paymentUrl = `${vnp_Url}?${new URLSearchParams(vnp_Params).toString()}`;
        res.json({ paymentUrl });
    } catch (error) {
        console.error('Lỗi tạo paymentUrl:', error);
        res.status(500).json({ error: 'Lỗi server khi tạo URL thanh toán' });
    }
};
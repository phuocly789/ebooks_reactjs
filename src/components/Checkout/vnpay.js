const crypto = require('crypto');

function createVNPayPayment(req, res) {
  const { amount, orderId, userId, returnUrl, bankCode } = req.body;
  const vnp_TmnCode = 'VLQ7W9CS'; // Lấy từ hàm PHP
  const vnp_HashSecret = 'F1ZHK1GCTWQAES1CZH1ZVNUJO8YSRVCZ'; // Lấy từ hàm PHP
  const vnp_Url = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html'; // URL Sandbox

  const startTime = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
  const expire = new Date(Date.now() + 15 * 60 * 1000).toISOString().replace(/[^0-9]/g, '').slice(0, 14);

  let vnp_Params = {
    vnp_Version: '2.1.0',
    vnp_Command: 'pay',
    vnp_TmnCode,
    vnp_Amount: amount * 100, // Nhân 100 để bỏ decimal, giống PHP
    vnp_CurrCode: 'VND',
    vnp_TxnRef: orderId || `ORDER_${Date.now()}`, // Nếu không có orderId, tạo mới
    vnp_OrderInfo: `Thanh toan don hang ${orderId || `ORDER_${Date.now()}`} cho user ${userId}`,
    vnp_OrderType: 'other', // Lấy từ PHP
    vnp_Locale: 'vn',
    vnp_ReturnUrl: returnUrl,
    vnp_IpAddr: req.ip,
    vnp_CreateDate: startTime,
    vnp_ExpireDate: expire, // Thêm từ PHP
  };

  if (bankCode) {
    vnp_Params.vnp_BankCode = bankCode; // Hỗ trợ bankCode như PHP
  }

  // Sắp xếp tham số theo thứ tự alphabet
  const sortedParams = Object.keys(vnp_Params)
    .sort()
    .reduce((result, key) => {
      result[key] = vnp_Params[key];
      return result;
    }, {});

  // Tạo chữ ký bảo mật
  const queryString = new URLSearchParams(sortedParams).toString();
  const vnp_SecureHash = crypto.createHmac('sha512', vnp_HashSecret).update(queryString).digest('hex');
  vnp_Params.vnp_SecureHash = vnp_SecureHash;

  const paymentUrl = `${vnp_Url}?${new URLSearchParams(vnp_Params).toString()}`;
  res.json({ paymentUrl });
}

module.exports = { createVNPayPayment };
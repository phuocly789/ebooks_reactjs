import axiosClient from './axiosClient';

// Thêm sản phẩm vào wishlist
const addToWishlist = async (data) => {
    return await axiosClient.post('/wishlist', data);
};

// Lấy danh sách wishlist theo userId
const getWishlist = async (userId) => {
    return await axiosClient.get(`/wishlist/${userId}`);
};

// Xóa 1 item khỏi wishlist
const deleteWishlistItem = async (body) => {
    return await axiosClient.delete('/wishlist/deleteItem', {
        data: body
    });
};

// Xóa toàn bộ wishlist
const clearWishlist = async (body) => {
    return await axiosClient.delete('/wishlist/delete', {
        data: body
    });
};

export { addToWishlist, getWishlist, deleteWishlistItem, clearWishlist };

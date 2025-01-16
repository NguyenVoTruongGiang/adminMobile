import { get, post, put, del } from "./ApiService";

// Lấy danh sách đơn hàng
export const getOrders = async () => {
  return get("order");
};

// Lấy thông tin chi tiết của một đơn hàng
export const getOrderById = async (orderId) => {
  return get(`order/${orderId}`);
};

// Tạo mới một đơn hàng
export const createOrder = async (orderData) => {
  return post("order", orderData);
};

// Cập nhật thông tin của một đơn hàng
export const updateOrder = async (orderId, orderData) => {
  return put(`order/${orderId}`, orderData);
};

// Xóa một đơn hàng
export const deleteOrder = async (orderId) => {
  return del(`order/${orderId}`);
};

// Lấy danh sách đơn hàng của một người dùng
export const getOrdersByUserId = async (userId) => {
  return get(`order/user/${userId}`);
};
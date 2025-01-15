import { get, post, put, del } from "./ApiService";

// Lấy danh sách đơn hàng
export const getOrders = async () => {
  return get("api/orders");
};

// Lấy thông tin chi tiết của một đơn hàng
export const getOrderById = async (orderId) => {
  return get(`api/orders/${orderId}`);
};

// Tạo mới một đơn hàng
export const createOrder = async (orderData) => {
  return post("api/orders", orderData);
};

// Cập nhật thông tin của một đơn hàng
export const updateOrder = async (orderId, orderData) => {
  return put(`api/orders/${orderId}`, orderData);
};

// Xóa một đơn hàng
export const deleteOrder = async (orderId) => {
  return del(`api/orders/${orderId}`);
};
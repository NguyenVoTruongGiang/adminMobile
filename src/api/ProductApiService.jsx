import { get, post, put, del } from "./ApiService";

// Lấy danh sách sản phẩm
export const getProducts = async () => {
  return get("api/products");
};

// Lấy thông tin chi tiết của một sản phẩm
export const getProductById = async (productId) => {
  return get(`api/products/${productId}`);
};

// Tạo mới một sản phẩm
export const createProduct = async (productData) => {
  return post("api/products", productData);
};

// Cập nhật thông tin của một sản phẩm
export const updateProduct = async (productId, productData) => {
  return put(`api/products/${productId}`, productData);
};

// Xóa một sản phẩm
export const deleteProduct = async (productId) => {
  return del(`api/products/${productId}`);
};
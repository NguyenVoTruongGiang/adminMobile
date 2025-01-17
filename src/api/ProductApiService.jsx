import { get, post, put, del } from "./ApiService";

// Lấy danh sách sản phẩm
export const getProducts = async () => {
  return get("api/products");
};

// Lấy thông tin chi tiết của một sản phẩm
export const getProductById = async (id) => {
  return get(`api/products/${id}`);
};

// Tạo mới một sản phẩm
export const createProduct = async (productData) => {
  return post("api/products", productData);
};

// Cập nhật thông tin của một sản phẩm
export const updateProduct = async (id, productData) => {
  return put(`api/products/${id}`, productData);
};

// Xóa một sản phẩm
export const deleteProduct = async (id) => {
  return del(`api/products/${id}`);
};
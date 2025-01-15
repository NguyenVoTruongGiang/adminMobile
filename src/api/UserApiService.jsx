// import { get, login, post } from "./ApiService";

// export const getVerifyCode = async (value) => {
//   return post("", value);
// };

// export const getMyInfo = async () => {
//   return get("api/users/MyInfo");
// };

// export const getUserToken = async (data) => {
//   return login("api/auth/token", data);
// };

import { get, post, put, del, login } from "./ApiService";

// Lấy danh sách người dùng
export const getUsers = async () => {
  return get("api/admin/users");
};

// Lấy thông tin chi tiết của một người dùng
export const getUserById = async (userId) => {
  return get(`api/admin/users/${userId}`);
};

// Tạo mới một người dùng
export const createUser = async (userData) => {
  return post("api/admin/users", userData);
};

// Cập nhật thông tin của một người dùng
export const updateUser = async (userId, userData) => {
  return put(`api/admin/users/${userId}`, userData);
};

// Xóa một người dùng
export const deleteUser = async (userId) => {
  return del(`api/admin/users/${userId}`);
};

// Lấy token người dùng
export const getUserToken = async (data) => {
  return login("api/auth/token", data);
};
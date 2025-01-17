import { get, post, put, del, login } from "./ApiService";

// // Lấy danh sách người dùng
// export const getUsers = async () => {
//   return get("api/auth");
// };

//lấy toàn bộ người dùng 
export const getAllUsers = async () => {
  return get("api/users");
}

// Lấy thông tin chi tiết của một người dùng
export const getUserById = async (userId) => {
  return get(`api/users/${userId}`);
};

// Tạo mới một người dùng
export const createUser = async (userData) => {
  return post("api/users", userData);
};

// Cập nhật thông tin của một người dùng
export const updateUser = async (userId, userData) => {
  return put(`api/users/${userId}`, userData);
};

// Xóa một người dùng
export const deleteUser = async (userId) => {
  return del(`api/users/${userId}`);
};

//logout
export const logout = async () => {
  return post("api/auth/logout");
};

//myinfo
export const getMyInfo = async () => {
  return get("api/users/MyInfo");
};

// Lấy token người dùng
export const getAdminToken = async (data) => {
  console.log("data là: ", data);
  return login("api/auth/token", data);
};

// Làm mới token
export const refreshToken = async () => {
  return post("api/auth/refresh");
};
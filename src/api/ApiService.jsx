// filepath: /d:/adminMobile/adminMobile/src/api/ApiService.jsx
import axios from "axios";

// Base URL cho API (không cần thiết khi sử dụng proxy)
const baseUrl = "/"; // Sử dụng endpoint tương đối

// Hàm lấy token từ localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Hàm gọi API chung
const request = async (
  method,
  endpoint,
  data,
  useToken = true // Tham số để xác định có sử dụng token hay không
) => {
  try {
    const config = {
      method,
      url: `${baseUrl}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
      },
      ...(data && { data }), // Chỉ thêm data nếu có
      withCredentials: true, // Đảm bảo rằng axios gửi cookie cùng với yêu cầu
    };

    // Nếu cần token, thêm vào header
    if (useToken) {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    console.log("url: ", `${baseUrl}${endpoint}`); // Sửa lại thành console.log

    return await axios(config);
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("API Error: ", error);
    throw error; // Ném lại lỗi để xử lý ở nơi khác nếu cần
  }
};

// Hàm gọi GET API
export const get = async (endpoint) => {
  return request("GET", endpoint);
};

// Hàm gọi POST API
export const post = async (endpoint, data) => {
  return request("POST", endpoint, data);
};

// Hàm gọi PUT API
export const put = async (endpoint, data) => {
  return request("PUT", endpoint, data);
};

// Hàm gọi DELETE API
export const del = async (endpoint) => {
  return request("DELETE", endpoint);
};

// Hàm gọi login, không cần token
export const login = async (endpoint, data) => {
  return request("POST", endpoint, data, false); // Không dùng token khi login
};
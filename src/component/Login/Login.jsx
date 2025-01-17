import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAdminToken,
  getMyInfo,
  refreshToken,
} from "../../api/UserApiService";
import "./Login.css";

const Login = () => {
  const [email, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await getAdminToken({ email, password });
      console.log("response: ", response);
      const token = response.data.data.token;
      console.log("token: ", token);
      localStorage.setItem("token", token);
      navigate("/admin");
    } catch (err) {
      console.error("Login failed: ", err);
      setError(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập."
      );
    }

    try {
      if (localStorage.getItem("token")) {
        const response = await getMyInfo();
        console.log("response: ", response);
        const userIdId = response.data.data.id;
        const userEmail = response.data.data.email;
        console.log("id: ", userIdId);
        localStorage.setItem("id", userIdId);
        console.log("email: ", userEmail);
        localStorage.setItem("email", userEmail);
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div className="form-item">
          <label className="label">Tên đăng nhập</label>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <label className="label">Mật khẩu</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;

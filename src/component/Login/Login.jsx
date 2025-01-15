import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../../api/UserApiService";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await getUserToken({ username, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/admin");
    } catch (err) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.");
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
            value={username}
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
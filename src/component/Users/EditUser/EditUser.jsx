import React, { useState, useEffect } from "react";
import "./EditUser.css";
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { getUserById, updateUser } from "../../api/UserApiService";

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    email: "",
    username: "",
    password: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    role: ""
  });
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await getUserById(userId);
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch user:", error);
  //     }
  //   };

  //   fetchUser();
  // }, [userId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    // try {
    //   await updateUser(userId, user);
    //   navigate("/admin/users");
    // } catch (error) {
    //   console.error("Failed to update user:", error);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <button className="swapper">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack} />
      </button>
      <form className="form" onSubmit={handleUpdate}>
        <div className="form-item">
          <label className="label">ID</label>
          <input
            className="input"
            type="text"
            name="id"
            value={user.id}
            disabled
          />
        </div>
        <div className="form-item">
          <label className="label">Tên người dùng</label>
          <input
            className="input"
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="label">Tài khoản</label>
          <input
            className="input"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="label">Mật khẩu</label>
          <input
            className="input"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="label">Địa chỉ</label>
          <input
            className="input"
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="label">Số ĐT</label>
          <input
            className="input"
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="label">Ngày sinh</label>
          <input
            className="input"
            type="date"
            name="birthDate"
            value={user.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label className="label">Role</label>
          <input
            className="input"
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
        </div>
        <button className="button" type="submit">Cập nhật</button>
      </form>
    </div>
  );
};

export default EditUser;
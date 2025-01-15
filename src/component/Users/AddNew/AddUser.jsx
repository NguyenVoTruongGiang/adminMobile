import React, { useState } from "react";
import "./AddUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { createUser } from "../../api/UserApiService";

const AddUser = () => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCreate = async () => {
    const newUser = {
      id,
      fullName,
      email,
      username,
      password,
      address,
      phoneNumber,
      birthDate,
      role,
    };

    // try {
    //   await createUser(newUser);
    //   navigate("/admin/users");
    // } catch (error) {
    //   console.error("Failed to create user:", error);
    // }
  };

  return (
    <div className="container">
      <button className="swapper">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack} />
      </button>
      <form className="form">
        <div className="form-item">
          <label className="label">ID</label>
          <input
            className="input"
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Tên người dùng</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Tài khoản</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Mật khẩu</label>
          <input
            className="input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Địa chỉ</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Số ĐT</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Ngày sinh</label>
          <input
            className="input"
            type="date"
            placeholder="Enter Birth Date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label className="label">Role</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button className="button" type="button" onClick={handleCreate}>Cập nhật</button>
      </form>
    </div>
  );
};

export default AddUser;
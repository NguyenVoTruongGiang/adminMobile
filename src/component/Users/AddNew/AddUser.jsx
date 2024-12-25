import React from "react";
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className="container">
      <form className="form">
        <div className="form-item">
          <label className="label">ID</label>
          <input className="input" type="text" placeholder="Enter ID" />
        </div>
        <div className="form-item">
          <label className="label">Tên người dùng</label>
          <input className="input" type="text" placeholder="Enter Full Name" />
        </div>
        <div className="form-item">
          <label className="label">Email</label>
          <input className="input" type="email" placeholder="Enter Email" />
        </div>
        <div className="form-item">
          <label className="label">Tài khoản</label>
          <input className="input" type="text" placeholder="Enter Username" />
        </div>
        <div className="form-item">
          <label className="label">Mật khẩu</label>
          <input className="input" type="password" placeholder="Enter Password" />
        </div>
        <div className="form-item">
          <label className="label">Địa chỉ</label>
          <input className="input" type="text" placeholder="Enter Address" />
        </div>
        <div className="form-item">
          <label className="label">Số ĐT</label>
          <input className="input" type="text" placeholder="Enter Phone Number" />
        </div>
        <div className="form-item">
          <label className="label">Ngày sinh</label>
          <input className="input" type="text" placeholder="Enter Birth Date" />
        </div>
        <div className="form-item">
          <label className="label">Role</label>
          <input className="input" type="text" placeholder="Enter Role" />
        </div>
        <button className="button">Cập nhật</button>
      </form>
    </div>
  );
};

export default AddUser;
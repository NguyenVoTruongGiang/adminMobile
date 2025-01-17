import React, { useState, useEffect } from "react";
import "./EditUser.css";
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getUserById, updateUser } from "../../../api/UserApiService";

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserById(userId);
        console.log("response edit: ", response);
        const userUpdate = response.data.data;
        console.log("product update: ", userUpdate);
        setUser(userUpdate);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleBack = () => {
    navigate(-1);
  };

 const handleUpdate = async () => {
    try {
      const response = await updateUser(userId, user);
      console.log("response update api: ", response);
      navigate("/admin/users");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
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
            onChange={(e) =>
              setUser({ ...user, fullName: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label className="label">Email</label>
          <input
            className="input"
            type="text"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label className="label">Ngày tháng năm sinh</label>
          <input
            className="input"
            type="date"
            value={user.dateOfBirth}
            onChange={(e) =>
              setUser({ ...user, dateOfBirth: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label className="label">Trạng thái</label>
          <input
            className="input"
            type="text"
            value={user.status}
            onChange={(e) =>
              setUser({ ...user, status: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label className="label">Số ĐT</label>
          <input
            className="input"
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={(e) =>
              setUser({ ...user, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label className="label">Địa chỉ</label>
          <input
            className="input"
            type="text"
            name="address"
            value={user.addresses}
            onChange={(e) =>
              setUser({ ...user, addresses: e.target.value })
            }
          />
        </div>
        {/* <div className="form-item">
          <label className="label">Role</label>
          <input
            className="input"
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
        </div> */}
        <button className="button" type="submit" onClick={handleUpdate}>Cập nhật</button>
      </form>
    </div>
  );
};

export default EditUser;
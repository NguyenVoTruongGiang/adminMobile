import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getAllUsers, deleteUser } from "../../api/UserApiService";
import { useNavigate } from "react-router-dom";
import "./Users.css";

const Users = ({ setCurrentUserView }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (localStorage.getItem("token")) {
          const response = await getAllUsers();
          console.log("response user: ", response);
          const allUsers = response.data.data;
          console.log("Tất cả người dùng: ", allUsers);
          setUsers(allUsers);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    navigate(`/admin/users/edit/${userId}`);
  };

  const handleDelete = async (userId) => {
        try {
          const PI = await getAllUsers();
          const userList  = PI.data.data;
          for (let i = 0; i < userList .length; i++) {
            if (userList [i].id = userId) {
              console.log("productsList [i].id: ", userList [i].id);
              const response = await deleteUser(userList [i].id);
              console.log("response delete: ", response);
              const userDel = response.data.data;
              console.log("user delete: ", userDel);
              break;
            }
            
          }
        } catch (error) {
          console.error("Failed to delete user:", error);
        }
      };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Vai trò</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                {/* Extracting role IDs */}
                {user.role.map((r) => r.id).join(", ")}
              </td>
              <td>
                <div className="actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(user.id)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(user.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Xóa
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

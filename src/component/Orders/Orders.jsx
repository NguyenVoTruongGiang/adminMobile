import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";
import { getOrders } from "../../api/OrderApiService";
import { getAllUsers } from "../../api/UserApiService";

const Orders = ({ setCurrentOrderView }) => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const getToken = localStorage.getItem("token");
        const userEmail = localStorage.getItem("email");
        if (getToken != null && userEmail != null) {
          const response = await getAllUsers();
          const allUser = response.data.data;
          console.log("tất cả ng dùng: ", allUser);
          const userEmail = localStorage.getItem("email");
          console.log("email: ", userEmail);

          const ordersResponse = await getOrders();
          const allOrders = ordersResponse.data.data; // Assuming the response structure
          console.log("Tất cả đơn hàng: ", allOrders);
          setOrders(allOrders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
          <th>ID</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Status</th>
            <th>Total Price</th>
            <th>Total Discount</th>
            <th>Grand Total</th>
            <th>Shipping Fee</th>
            <th>Address</th>
            <th>Created At</th>
            <th>Cart Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.userId}</td>
              <td>
                {order.products.map((product, index) => (
                  <div key={index} className="product-item">
                    {product.name}
                  </div>
                ))}
              </td>
              <td>
                {order.products.map((product, index) => (
                  <div key={index} className="product-item">
                    {product.price}đ
                  </div>
                ))}
              </td>
              <td>
                <div
                  className={`status ${
                    order.status === "Delivered"
                      ? "status-success"
                      : "status-pending"
                  }`}
                >
                  {order.status === "Delivered" ? "✔" : "✖"}
                </div>
              </td>
              <td>
                <div className="actions">
                  <button
                    className="edit-button"
                    onClick={() => setCurrentOrderView("EditOrder")}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => console.log("Deleting order:", order.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
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

export default Orders;

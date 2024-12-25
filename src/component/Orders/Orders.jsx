import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import './Orders.css';

const Orders = ({ setCurrentOrderView }) => {
  const data = [
    {
      id: 1,
      userId: 101,
      products: [{ name: "Áo Thun", price: 1000 }],
      shippingFee: 50,
      time: "2023-10-01",
      status: "Delivered",
      address: {
        houseNumber: "123",
        commune: "Commune 1",
        district: "District 1",
        province: "Province 1",
        phone: "123456789",
      },
    },
    {
      id: 2,
      userId: 102,
      products: [{ name: "Xe thể thao", price: 2000 }],
      shippingFee: 100,
      time: "2023-10-02",
      status: "Pending",
      address: {
        houseNumber: "456",
        commune: "Commune 2",
        district: "District 2",
        province: "Province 2",
        phone: "987654321",
      },
    },
  ];

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID đơn hànghàng</th>
            <th>Đơn hàng</th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
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
                    order.status === "Delivered" ? "status-success" : "status-pending"
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
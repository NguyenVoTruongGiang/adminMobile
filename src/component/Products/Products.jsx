import React from "react";
import './Products.css';

const Products = ({ setCurrentProductView }) => {
  const data = [
    {
      id: 1,
      name: "Product 1",
      type: "Type 1",
      price: 1000,
      quantity: 10,
      image: '../../assets/images/proFake_1.jpeg',
    },
    {
      id: 2,
      name: "Product 2",
      type: "Type 2",
      price: 2000,
      quantity: 20,
      image: "../../assets/images/proFake2.jpeg",
    },
    {
      id: 3,
      name: "Product 3",
      type: "Type 3",
      price: 3000,
      quantity: 30,
      image: "../../assets/images/proFake3.jpeg",
    },
    {
      id: 4,
      name: "Product 4",
      type: "Type 4",
      price: 4000,
      quantity: 40,
      image: "../../assets/images/proFake4.jpeg",
    },
  ];

  return (
    <div className="container">
      <button className="add-button">Thêm sản phẩm</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên món</th>
            <th>Loại</th>
            <th>Giá tiền</th>
            <th>Số lượng</th>
            <th>Hình ảnh</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <img src={product.image} alt={product.name} className="product-image" />
              </td>
              <td>
                <div className="actions">
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                  <button className="upload-button">Upload hình ảnh</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
import React, { useState } from "react";
import "./Edit.css";

const Edit = () => {
  const [selectedType, setSelectedType] = useState("Combo");
  const [id, setId] = useState("123");
  const [productName, setProductName] = useState("Product Name");
  const [price, setPrice] = useState("1000");
  const [quantity, setQuantity] = useState("10");

  return (
    <div className="container">
      <div className="form-item">
        <label className="label">ID</label>
        <input
          className="input"
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          disabled
        />
      </div>

      <div className="form-item">
        <label className="label">Tên sản phẩm</label>
        <input
          className="input"
          type="text"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label className="label">Giá tiền</label>
        <input
          className="input"
          type="text"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label className="label">Loại sản phẩm</label>
        <select
          className="input"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="Combo">Combo</option>
          <option value="Cơm">Cơm</option>
          <option value="Mì">Mì</option>
          <option value="Miến">Miến</option>
          <option value="Phá lấu">Phá lấu</option>
          <option value="Nước giải khát">Nước giải khát</option>
          <option value="Các món khác">Các món khác</option>
        </select>
      </div>

      <div className="form-item">
        <label className="label">Số lượng</label>
        <input
          className="input"
          type="text"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button className="button">Cập nhật sản phẩm</button>
    </div>
  );
};

export default Edit;
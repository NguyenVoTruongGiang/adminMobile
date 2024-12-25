import React, { useState } from "react";
import "./EditOrder.css";

const EditOrder = () => {
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
          placeholder="Enter tên sản phẩm"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label className="label">Giá</label>
        <input
          className="input"
          type="text"
          placeholder="Nhập giá"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label className="label">Loại giày</label>
        <select
          className="input"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="Giày thể thao">Giày thể thao</option>
          <option value="Giày thường">Giày thường</option>
          <option value="Các loại giày khác">Các loại giày khác</option>
        </select>
      </div>

      <div className="form-item">
        <label className="label">Số lượng</label>
        <input
          className="input"
          type="text"
          placeholder="Nhập số lượng"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label className="label">Time</label>
        <input className="input" type="date" />
      </div>

      <button className="button">Update Order</button>
    </div>
  );
};

export default EditOrder;
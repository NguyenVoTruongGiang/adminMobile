import React, { useState } from "react";
import "./AddNew.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../api/ProductApiService";

const AddNew = () => {
  const [selectedType, setSelectedType] = useState("");
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUri, setImageUri] = useState("");

  const selectImage = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUri(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCreate = async () => {
    const newProduct = {
      id,
      productName,
      price,
      selectedType,
      quantity,
      imageUri,
    };

    // try {
    //   await createProduct(newProduct);
    //   navigate("/admin/products");
    // } catch (error) {
    //   console.error("Failed to create product:", error);
    // }
  };

  return (
    <div className="container">
      <button className="swapper">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack} />
      </button>
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
          <option value="">Chọn loại sản phẩm</option>
          <option value="giày đi bộ">giày đi bộ</option>
          <option value="giày da">giày da</option>
          <option value="giày thể thao">giày thể thao</option>
          <option value="Các loại giày khác">Các loại giày khác</option>
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

      <div className="form-item">
        <label className="label">Hình ảnh</label>
        <input type="file" onChange={selectImage} />
        {imageUri && <img src={imageUri} alt="Selected" className="image" />}
      </div>

      <button className="button" onClick={handleCreate}>Thêm sản phẩm</button>
    </div>
  );
};

export default AddNew;
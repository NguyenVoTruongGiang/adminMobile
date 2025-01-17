import React, { useState } from "react";
import "./AddNew.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../api/ProductApiService";

const AddNew = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productMediaUrls, setProductMediaUrls] = useState([]);
  const [size, setSize] = useState([]);
  const [description, setDescription] = useState("");

  const selectImage = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductMediaUrls(reader.result);
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
      name,
      description,
      price,
      size,
      productMediaUrls,
    };

    try {
      const response = await createProduct(newProduct);
      console.log("Product created:", response);
      navigate("/admin/products");
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  return (
    <div className="container">
      <button className="swapper">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack} />
      </button>

      <div className="form-item">
        <label className="label">Tên sản phẩm</label>
        <input
          className="input"
          type="text"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-item">
        <label className="label">mô tả</label>
        <input
          className="input"
          type="text"
          placeholder="Nhập mô tả"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

      <div className="form-item size">
        <div className="from">
        <label className="label">từ</label>
        <input
          className="input"
          type="text"
          placeholder="Enter size"
          value={[size]}
          onChange={(e) => setSize(e.target.value)}
        />
        </div>
        <div className="to">
          <label className="label">đến</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Price"
            value={[size]}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

      </div>

      <div className="form-item">
        <label className="label">Hình ảnh</label>
        <input type="file" onChange={selectImage} />
        {productMediaUrls && (
          <img src={productMediaUrls} alt="Selected" className="image" />
        )}
      </div>

      <button className="button" onClick={handleCreate}>
        Thêm sản phẩm
      </button>
    </div>
  );
};

export default AddNew;

import React, { useState, useEffect } from "react";
import "./Edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
// import { getProductById, updateProduct } from "../../api/ProductApiService";

const Edit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await getProductById(productId);
  //       setProduct(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch product:", error);
  //     }
  //   };

  //   fetchProduct();
  // }, [productId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdate = async () => {
    // try {
    //   await updateProduct(productId, product);
    //   navigate("/admin/products");
    // } catch (error) {
    //   console.error("Failed to update product:", error);
    // }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

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
          value={product.id}
          disabled
        />
      </div>

      <div className="form-item">
        <label className="label">Tên sản phẩm</label>
        <input
          className="input"
          type="text"
          value={product.productName}
          onChange={(e) => setProduct({ ...product, productName: e.target.value })}
        />
      </div>

      <div className="form-item">
        <label className="label">Giá tiền</label>
        <input
          className="input"
          type="text"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>

      <div className="form-item">
        <label className="label">Loại sản phẩm</label>
        <select
          className="input"
          value={product.selectedType}
          onChange={(e) => setProduct({ ...product, selectedType: e.target.value })}
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
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
      </div>

      <button className="button" onClick={handleUpdate}>Cập nhật sản phẩm</button>
    </div>
  );
};

export default Edit;
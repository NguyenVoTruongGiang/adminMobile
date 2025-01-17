import React, { useState, useEffect } from "react";
import "./Edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../../api/ProductApiService";

const Edit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        console.log("response edit: ", response);
        const productUpdate = response.data.data;
        console.log("product update: ", productUpdate);
        setProduct(productUpdate);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdate = async () => {
    try {
      const response = await updateProduct(productId, product);
      console.log("response update api: ", response);
      navigate("/admin/products");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <div className="container">
      <button className="swapper">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleBack} />
      </button>
      <div className="form-item">
        <label className="label">ID</label>
        <input className="input" type="text" value={product.id} disabled />
      </div>

      <div className="form-item">
        <label className="label">Tên sản phẩm</label>
        <input
          className="input"
          type="text"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, productName: e.target.value })
          }
        />
      </div>

      <div className="form-item">
        <label className="label">Loại sản phẩm</label>
        <select className="input">
          <option value="">Giày thể thao</option>
          <option value="">Giày nữ</option>
          <option value="">Giày nam</option>
          <option value="">Giày người lớn</option>
          <option value="">Giày thường</option>
          <option value="">Giày trẻ em</option>
          <option value="">Các loại giày khác</option>
        </select>
      </div>

      <div className="form-item">
        <label className="label">Mô tả</label>
        <input
          className="input"
          type="text"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
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
        <label className="label">Trạng thái</label>
        <select
          className="input"
          value={product.status}
          onChange={(e) => setProduct({ ...product, status: e.target.value })}
        >
          <option value="1">Bình thường</option>
          <option value="0">Đã xóa</option>
        </select>
      </div>

      <div className="form-item">
        <label className="label">Số lượng tồn kho</label>
        <input
          className="input"
          type="text"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
      </div>

      <button className="button" onClick={handleUpdate}>
        Cập nhật sản phẩm
      </button>
    </div>
  );
};

export default Edit;

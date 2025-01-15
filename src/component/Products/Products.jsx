import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getProducts, deleteProduct } from "../../api/ProductApiService";
import './Products.css';

const Products = ({ setCurrentProductView }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

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
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <div className="actions">
                  <button
                    className="edit-button"
                    onClick={() => setCurrentProductView("EditProduct")}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(product.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
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
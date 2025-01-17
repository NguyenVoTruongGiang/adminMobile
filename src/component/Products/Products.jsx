  import React, { useState, useEffect } from "react";
  import { getProducts, deleteProduct, updateProduct, createProduct, getProductById } from "../../api/ProductApiService";
  import "./Products.css";
  import { useNavigate } from "react-router-dom";
  import EditProduct from "./Edit/Edit";

  const Products = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");
    const [productId, setProductId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          if (localStorage.getItem("token")) {
            const response = await getProducts();
            console.log("response: ", response);
            const allProducts = response.data.data; 
            console.log("Tất cả sản phẩm: ", allProducts);
            setProducts(allProducts);
          }
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };

      fetchProducts();
    }, []);

    const handleDelete = async (idDel) => {
      try {
        const PI = await getProducts();
        const productsList  = PI.data.data;
        for (let i = 0; i < productsList .length; i++) {
          if (productsList [i].id = idDel) {
            console.log("productsList [i].id: ", productsList [i].id);
            const response = await deleteProduct(productsList [i].id);
            console.log("response delete: ", response);
            const productDel = response.data.data;
            console.log("product delete: ", productDel);
            break;
          }
          
        }
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    };

    const handleCreateProduct = async () => {
      const response = await createProduct(product);
    }

    const handleEditProductById = (productId) => {
      try {
        navigate(`/admin/products/edit/${productId}`);
      } catch (error) {
        console.error("Failed to navigate to edit product page:", error);
      }
    };

    const handleAddProduct = () => {
      navigate("/admin/products/add");
    }

    const getStatusText = (status) => {
      return status == 1 ? <span className="status-icon status-available">&#10003;</span> : <span className="status-icon status-unavailable">&#10005;</span>;
    };

    return (
      <div className="products-container">
        <div className="products-header">
          <h2>Danh sách sản phẩm</h2>
          <button onClick={() => handleAddProduct()}>Thêm</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Giá tiền</th>
              <th>trạng thái</th>
              <th>Tồn kho</th>
              <th>Hoạt động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} VND</td>
                <td>{getStatusText(product.status)}</td>
                <td>{product.stock}</td>
                <td>
                  <button onClick={() => handleEditProductById(product.id)}>Sửa</button>
                  <button onClick={() => handleDelete(product.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Products;
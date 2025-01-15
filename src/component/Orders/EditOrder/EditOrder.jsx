import React, { useState, useEffect } from "react";
import "./EditOrder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
// import { getOrderById, updateOrder } from "../../api/OrderApiService";

const EditOrder = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchOrder = async () => {
  //     try {
  //       const response = await getOrderById(orderId);
  //       setOrder(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch order:", error);
  //     }
  //   };

  //   fetchOrder();
  // }, [orderId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleUpdate = async () => {
    // try {
    //   await updateOrder(orderId, order);
    //   navigate("/admin/orders");
    // } catch (error) {
    //   console.error("Failed to update order:", error);
    // }
  };

  if (!order) {
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
          value={order.id}
          disabled
        />
      </div>

      <div className="form-item">
        <label className="label">Tên sản phẩm</label>
        <input
          className="input"
          type="text"
          value={order.productName}
          onChange={(e) => setOrder({ ...order, productName: e.target.value })}
        />
      </div>

      <div className="form-item">
        <label className="label">Giá</label>
        <input
          className="input"
          type="text"
          value={order.price}
          onChange={(e) => setOrder({ ...order, price: e.target.value })}
        />
      </div>

      <div className="form-item">
        <label className="label">Loại giày</label>
        <select
          className="input"
          value={order.selectedType}
          onChange={(e) => setOrder({ ...order, selectedType: e.target.value })}
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
          value={order.quantity}
          onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
        />
      </div>

      <div className="form-item">
        <label className="label">Time</label>
        <input
          className="input"
          type="date"
          value={order.time}
          onChange={(e) => setOrder({ ...order, time: e.target.value })}
        />
      </div>

      <button className="button" onClick={handleUpdate}>Update Order</button>
    </div>
  );
};

export default EditOrder;
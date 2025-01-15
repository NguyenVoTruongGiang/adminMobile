import React, { useState } from "react";
import {useNavigate, Outlet } from "react-router-dom";
// import Orders from "../Orders/Orders";
// import Products from "../Products/Products";
// import Users from "../Users/Users";
// import Statistics from "../Statistics/Statistics";
// import EditOrder from "../Orders/EditOrder/EditOrder";
// import EditUser from "../Users/EditUser/EditUser";
// import EditProduct from "../Products/Edit/Edit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCube,
  faGear,
  faFileInvoice,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import './Admin.css';

const AdminPanel = () => {
  // const [selectedPage, handleNavigation] = useState("Orders");
  // const [currentOrderView, setCurrentOrderView] = useState("Orders");
  // const [currentProductView, setCurrentProductView] = useState("Products");
  // const [currentUserView, setCurrentUserView] = useState("Users");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [status, setStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Filters applied:");
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
    console.log("Status:", status);
    console.log("Search Query:", searchQuery);
  };

  const navigate = useNavigate();

  const handleNavigation = (page) => {
    navigate(`/admin/${page}`);
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setStatus("all");
    setSearchQuery("");
  };

  // const renderHeader = () => {
  //   switch (selectedPage) {
  //     case "Statistics":
  //       return "Thống kê";
  //     case "Orders":
  //       return currentOrderView === "EditOrder" ? "Chỉnh sửa đơn hàng" : "Quản lý đơn hàng";
  //     case "Products":
  //       return currentProductView === "EditProduct" ? "Chỉnh sửa sản phẩm" : "Quản lý sản phẩm";
  //     case "Users":
  //       return currentUserView === "EditUser" ? "Chỉnh sửa người dùng" : "Quản lý khách hàng";
  //     case "Settings":
  //       return "Cài đặt";
  //     default:
  //       return "Thống kê";
  //   }
  // };

  // const renderContent = () => {
  //   switch (selectedPage) {
  //     case "Dashboard":
  //       return <Statistics />;
  //     case "Orders":
  //       return currentOrderView === "EditOrder" ? (
  //         <EditOrder />
  //       ) : (
  //         <Orders setCurrentOrderView={setCurrentOrderView} />
  //       );
  //     case "Products":
  //       return currentProductView === "EditProduct" ? (
  //         <EditProduct />
  //       ) : (
  //         <Products setCurrentProductView={setCurrentProductView} />
  //       );
  //     case "Users":
  //       return currentUserView === "EditUser" ? (
  //         <EditUser />
  //       ) : (
  //         <Users setCurrentUserView={setCurrentUserView} />
  //       );
  //     default:
  //       return <Orders setCurrentOrderView={setCurrentOrderView} />;
  //   }
  // };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <h2 className="logo">Admin manager</h2>
        <div className="menu">
          <button className="menu-item" onClick={() => handleNavigation("statistics")}>
            <FontAwesomeIcon icon={faFileInvoice} size="lg" />
            <span>Thống kê</span>
          </button>
          <button className="menu-item" onClick={() => handleNavigation("orders")}>
            <FontAwesomeIcon icon={faFileInvoice} size="lg" />
            <span>Quản lý đơn hàng</span>
          </button>
          <button className="menu-item" onClick={() => handleNavigation("users")}>
            <FontAwesomeIcon icon={faUserFriends} size="lg" />
            <span>Quản lý khách hàng</span>
          </button>
          <button className="menu-item" onClick={() => handleNavigation("products")}>
            <FontAwesomeIcon icon={faCube} size="lg" />
            <span>Quản lý sản phẩm</span>
          </button>
          <button className="menu-item">
            <FontAwesomeIcon icon={faGear} size="lg" />
            <span>Cài đặt</span>
          </button>
        </div>
      </div>
      <div className="main-content">
        <div className="login-section">
          <button className="btnLogin" onClick={() => handleNavigation("login")}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span>Đăng nhập</span>
          </button>
        </div>
        {/* <h1 className="header">{renderHeader()}</h1> */}
        <div className="main-bar">
          <div className="filter-section">
            <div className="filter-item">
              <label className="label">Từ ngày</label>
              <input
                type="date"
                className="input"
                placeholder="dd/mm/yyyy"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="filter-item">
              <label className="label">Đến ngày</label>
              <input
                type="date"
                className="input"
                placeholder="dd/mm/yyyy"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            <div className="filter-item">
              <label className="label">Trạng thái</label>
              <select
                className="input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="all">Tất cả</option>
                <option value="active">Hoàn thành</option>
                <option value="inactive">Không hoàn thành</option>
              </select>
            </div>
            <div className="filter-item">
              <label className="label search">Tìm kiếm</label>
              <input
                type="text"
                className="input"
                placeholder="Nhập tên cơ sở để tìm kiếm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="button-container">
            <button className="button" onClick={handleSearch}>
              Thực hiện
            </button>
            <button className="button reset-button" onClick={handleReset}>
              Đặt lại
            </button>
          </div>
          {/* {renderContent()} */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
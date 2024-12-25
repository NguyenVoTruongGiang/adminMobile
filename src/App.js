import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Admin from './component/Admin/Admin';
import StatisticsPage from './component/Statistics/Statistics';
import Orders from './component/Orders/Orders';
import EditOrder from './component/Orders/EditOrder/EditOrder';
import Products from './component/Products/Products';
import AddNewProduct from './component/Products/AddNew/AddNew';
import EditProduct from './component/Products/Edit/Edit';
import Users from './component/Users/Users';
import AddUser from './component/Users/AddNew/AddUser';
import EditUser from './component/Users/EditUser/EditUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* mặc định path là /admin */}
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="/admin/*" element={<Admin />} />

          {/* mở từng trang riêng  */}
          <Route path="/admin/statistics" element={<StatisticsPage />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/edit-order" element={<EditOrder />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/add-product" element={<AddNewProduct />} />
          <Route path="/admin/edit-product" element={<EditProduct />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/edit-user" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
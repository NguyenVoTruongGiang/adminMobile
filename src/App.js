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
import Login from './component/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/edit/:orderId" element={<EditOrder />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddNewProduct />} />
            <Route path="products/edit/:productId" element={<EditProduct />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="users/edit/:userId" element={<EditUser />} />
            <Route path="settings" element={<div>Cài đặt</div>} />
            <Route path="*" element={<Navigate to="statistics" />} />
          </Route>
          {/* <Route path="/products/edit" element={<EditProduct />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
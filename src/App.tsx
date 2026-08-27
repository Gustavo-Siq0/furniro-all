import './App.css'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import CheckoutPage from './pages/CheckoutPage';
import Shop from './pages/Shop';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import SingleUp from './pages/SingleUp';
import Login from './pages/Login';
import { isAuthenticated } from './auth';

function ProtectedRoute() {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />;
  }

  return <Outlet />;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/single-up" element={<SingleUp />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

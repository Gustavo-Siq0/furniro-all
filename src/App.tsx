import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import CheckoutPage from './pages/CheckoutPage';
import Shop from './pages/Shop';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import SingleUp from './pages/SingleUp';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/single-up" element={<SingleUp />} />
      </Route>
    </Routes>
  )
}

export default App

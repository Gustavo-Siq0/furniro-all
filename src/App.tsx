import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import CheckoutPage from './pages/CheckoutPage';
import Shop from './pages/Shop';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App

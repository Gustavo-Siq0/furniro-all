import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App

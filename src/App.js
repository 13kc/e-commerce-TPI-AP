import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDetail from './components/productdetails/ProductDetails';
import Registration from './components/register/Register';
import Login from './components/login/Login';
import Checkout from './components/checkout/Checkout';
import './App.css'

const products = [
  { id: 1, name: "Remera", price: 19.99, sku: "SKU123", description: "Remeras de morley de alta calidad", Image:"https://www.lto.com.ar/wp-content/uploads/2023/03/IMG_4121-1.jpg" },
  { id: 2, name: "Pantalon", price: 56.99, sku: "SKU456", description: "Pantalones de jean marca Levi's", Image: "https://acdn.mitiendanube.com/stores/001/163/833/products/d21f52e7-15a8-438b-844a-327f5bfa3dd61-663762f02824424d4716833014669441-640-0.jpeg" },
  { id: 3, name: "Zapatillas", price: 24.99, sku: "SKU789", description: "Zapatillas deportivas marca Nike", Image: "https://nikearprod.vtexassets.com/arquivos/ids/455265/DX1663_400_A_PREM.jpg?v=638149323112700000" },
];

function App() {
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const handleConfirmPurchase = () => {
    setPurchaseConfirmed(true);
  };


  return (
    <Router>
     <div className="app-container">
       <nav className="navigation" >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/checkout" element={<Checkout product={products[0]} onConfirmPurchase={handleConfirmPurchase} />} />
      <Route path="/product/:id" element={<ProductDetail products={products} onConfirmPurchase={handleConfirmPurchase} />} />
      <Route path="/" element={<Home products={products} />} />
    </Routes>
    </div>
  </div>
</Router>
 );
}


export default App;

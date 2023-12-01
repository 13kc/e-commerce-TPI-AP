import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'


const Home = ({ products }) => {
  return (
    <div  className="container">
      <h2>Productos</h2>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} className="product-image"/>
          <p className="product-name">{product.name}</p>
          <p className="product-price" >Precio: ${product.price}</p>
          <p className="product-sku">{product.sku}</p>
          <Link to={`/product/${product.id}`}>
          <button className="details-button" >Ver Detalles</button>
          </Link>
          <hr className="divider" />
        </div>
      ))}
    </div>
  );
};

export default Home;
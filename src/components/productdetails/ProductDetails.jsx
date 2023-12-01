import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './productDetails.css'

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === parseInt(id, 10));

    if (!product || typeof product !== 'object') {
        return <div></div>;
      }
    
     
      if (!product.name || !product.price || !product.sku || !product.description) {
        return <div className="container">El producto no tiene las propiedades esperadas.</div>;
      }

      const handleBuyClick = () => {
        
        navigate(`/checkout`);

      };

  return (
    <div className="container">
      <img src={product.image} alt={product.name} style={{ maxWidth: '200px', maxHeight: '200px' }} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">Precio: ${product.price}</p>
      <p className="product-sku">SKU: {product.sku}</p>
      <p className="product-description">{product.description}</p>
      <button onClick={handleBuyClick} className="buy-button">Comprar</button>
    </div>
  );
};

export default ProductDetail;
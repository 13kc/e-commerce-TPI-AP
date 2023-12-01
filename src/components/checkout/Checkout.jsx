import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './checkout.css'

const Checkout = ({ product, onConfirmPurchase }) => {
    const navigate = useNavigate();
    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

    const handleConfirmPurchase = () => {
      onConfirmPurchase();
      setPurchaseConfirmed(true);
  };

    const handleGoBack = () => {
      navigate(-1);
  };

  return (
    <div className="checkout-container" >
      <h2>Checkout</h2>
      <div className="product-details" >
        <p>Producto: {product.name}</p>
        <p>Precio: ${product.price}</p>
      </div>
      {purchaseConfirmed ? (
        <div>
          <p>¡Gracias por su compra!</p>
          <button onClick={handleGoBack}>Volver</button>
        </div>
      ) : (
          <button onClick={handleConfirmPurchase}>Confirmar Compra</button>
          )}
    </div>
  );
};

export default Checkout;
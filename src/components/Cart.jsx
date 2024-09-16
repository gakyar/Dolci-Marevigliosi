import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Alışveriş sepeti simgesi

const Cart = ({ cartItems, onClearCart, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Card className="cart-card fixed-cart mt-5 p-3 mb-5 text-center">
      <Card.Body>
        <Card.Title className='cart-title'>
          <FaShoppingCart size={24} /> Sepet
        </Card.Title>
        {cartItems.length === 0 ? (
          <p>Sepetinizde ürün yok.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-details">
                    <span className='cart-item-name fs-5 d-block mb-3'>{item.name} - {item.quantity} adet - ${item.price * item.quantity}</span>
                    
                    <div className="button-group">
                      <Button variant="secondary" onClick={() => onDecreaseQuantity(item)}>-</Button>
                      <span className="quantity-display">{item.quantity}</span>
                      <Button variant="secondary" onClick={() => onIncreaseQuantity(item)}>+</Button>
                      <Button className='remove-button ms-3' variant="danger" onClick={() => onRemoveItem(item)}>Kaldır</Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Toplam: ${totalPrice.toFixed(2)}</h3>
            <Button variant="danger"  onClick={onClearCart}>Sepeti Boşalt</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cart;

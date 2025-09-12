import React from "react";
import { useCart } from "./CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((book) => (
          <div key={book.id} className="cart-item">
            <img src={book.img} alt={book.title} />
            <div className="cart-info">
              <h2>{book.title}</h2>
              <p><strong>By:</strong> {book.author}</p>
              <p>{book.description}</p>
              <p><strong>${book.price}</strong></p>
              <button onClick={() => removeFromCart(book.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;

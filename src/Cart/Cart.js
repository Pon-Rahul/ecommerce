import React, { useEffect, useState } from "react";
import "./Cart.css";
import Footer from "../Footer/Footer";
import items from "../Product";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    // Initialize quantities state
    const initialQuantities = {};
    storedCart.forEach((_, i) => {
      initialQuantities[i] = 1; // default quantity is 1
    });
    setQuantities(initialQuantities);
  }, []);

  const handleQuantityChange = (cartIndex, event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cartIndex]: newQuantity,
    }));
  };

  // Calculate subtotal dynamically based on quantities state
  const subtotal = cartItems.reduce((total, itemIndex, cartIndex) => 
    total + items[itemIndex].price * (quantities[cartIndex] || 1), 0);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, itemIndex, cartIndex) => 
    total + (quantities[cartIndex] || 1), 0);

  return (
    <div>
      <div className="flex">
        <div className="list">
        <div className="empty">
        <div>Your Cart is empty</div>
        </div>
          {cartItems.map((itemIndex, cartIndex) => (
            <div className="cart" key={cartIndex}>
              <div className="product_one">
                <div>
                  <img src={items[itemIndex].image} alt="cart" className="cart_img" />
                </div>
                <div className="cart_details">
                  <div>{items[itemIndex].name}</div>
                  <div>In stock</div>
                  <div>Eligible for FREE Shipping</div>
                  <div>
                    <select
                      value={quantities[cartIndex] || 1}
                      onChange={(e) => handleQuantityChange(cartIndex, e)}
                    >
                      {[...Array(10)].map((_, q) => (
                        <option key={q + 1} value={q + 1}>
                          Qty: {q + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="price">
                <div className="single">
                  <div>Price</div>
                  <div>₹{items[itemIndex].price}</div>
                </div>
                <div>
                  <div>
                    Subtotal ({quantities[cartIndex] || 1} item
                    {quantities[cartIndex] > 1 ? "s" : ""}): ₹
                    {items[itemIndex].price * (quantities[cartIndex] || 1)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="proceed">
          <div>Your order is eligible for FREE Delivery.</div>
          <div>
            Subtotal ({totalQuantity} items): ₹{subtotal}
          </div>
          <div>EMI available</div>
          <div>
            Your order qualifies for EMI with valid credit cards (not available
            on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top
            up).
          </div>
          <div>
            <button type="button" className="button-33">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;

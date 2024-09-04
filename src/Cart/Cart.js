import React, { useEffect, useState } from "react";
import "./Cart.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import items from "../Product";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const initialQuantities = {};
    storedCart.forEach((_, i) => {
      initialQuantities[i] = 1; 
    });
    setQuantities(initialQuantities);

    const storedSubtotal = localStorage.getItem("subtotal");
    if (storedSubtotal) {
      setSubtotal(parseFloat(storedSubtotal));
    }
  }, []);

  const handleQuantityChange = (cartIndex, event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cartIndex]: newQuantity,
    }));
  };

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (total, itemIndex, cartIndex) =>
        total + items[itemIndex].price * (quantities[cartIndex] || 1),
      0
    );
    setSubtotal(newSubtotal);
    localStorage.setItem("subtotal", newSubtotal.toString());
  }, [quantities, cartItems]);

  const totalQuantity = cartItems.reduce(
    (total, itemIndex, cartIndex) =>
      total + (quantities[cartIndex] || 1),
    0
  );

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex">
        {cartItems.length === 0 ? (
          <div className="empty_cart">
          <div>Your cart is empty</div>
          <button type="button" className="button-32" onClick={()=> navigate(-1)}>Continue Search</button>
          </div>
        ) : (
          <div className="list">
            {cartItems.map((itemIndex, cartIndex) => (
              <div className="cart" key={cartIndex}>
                <div className="product_one">
                  <div>
                    <img
                      src={items[itemIndex].image}
                      alt="cart"
                      className="cart_img"
                    />
                  </div>
                  <div className="cart_details">
                    <div>{items[itemIndex].name}</div>
                    <div className="stock">In stock</div>
                    <div className="free">Eligible for FREE Shipping</div>
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
                    <div className="pricecolor">Price:</div>
                    <div className="amount">₹{items[itemIndex].price}</div>
                  </div>
                  <div>
                    <div className="sub">
                      Subtotal ({quantities[cartIndex] || 1} item
                      {quantities[cartIndex] > 1 ? "s" : ""}): ₹
                      {items[itemIndex].price * (quantities[cartIndex] || 1)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <div className="proceed">
            <div className="eligible">
              Your order is eligible for FREE Delivery.
            </div>
            <div className="cart_total">
              Subtotal ({totalQuantity} items): ₹{subtotal}
            </div>
            <div>EMI available</div>
            <div>
              Your order qualifies for EMI with valid credit cards (not
              available on purchase of Gold, Jewelry, Gift cards, and Amazon pay
              balance top up).
            </div>
            <div>
              <button
                type="button"
                className="button-33"
                onClick={() => navigate("/payment")}
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {items} from "../Product";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);
  const sub = 120;
  const [subtotal, setSubtotal] = useState(0);

   const Pay = () =>{
    alert("Order placed successfully");
    navigate("/search")
   }
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    const storedSubtotal = localStorage.getItem("subtotal");
    if (storedSubtotal) {
      setSubtotal(parseFloat(storedSubtotal));
    }
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="final_flex">
        <div className="items">
          {cartItems.map((itemIndex, cartIndex) => (
            <div className="exit_list" key={cartIndex}>
              <div className="img_space">
                <div>
                  <img
                    src={items[itemIndex].image}
                    alt="cart"
                    className="pay_img"
                  />
                </div>
                <div className="cart_details">
                  <div>{items[itemIndex].name}</div>
                  <div className="shipping">Eligible for FREE Shipping</div>
                  <div></div>
                </div>
              </div>
              <div className="price">
                <div className="date">
                  <div>Delivery date:</div>
                  <div>{items[itemIndex].date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pay_box">
          <div className="summary">Order Summary</div>
          <div className="billbox">
            <div>Items:</div>
            <div>₹{subtotal}</div>
          </div>
          <div className="billbox">
            <div>Delivery:</div>
            <div>₹{sub}</div>
          </div>
          <div className="billbox">
            <div>Total:</div>
            <div>₹{subtotal + sub}</div>
          </div>
          <div className="billbox">
            <div>Discount:</div>
            <div>- ₹{sub}</div>
          </div>
          <div className="bill_amount">
            <div>Order Total:</div>
            <div>₹{subtotal}</div>
          </div>
          <div>
            Choose a payment method to continue checking out. You will still
            have a chance to review and edit your order before it is final
          </div>
          <div>
            <button
              type="button"
              className="button-33"
              onClick={() => Pay()}
            >
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

export default Payment;

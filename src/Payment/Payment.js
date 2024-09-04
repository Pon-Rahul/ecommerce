import React, { useEffect, useState } from "react";
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import items from "../Product";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const sub = 120;
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    const storedSubtotal = localStorage.getItem("subtotal");
    if (storedSubtotal) {
      setSubtotal(parseFloat(storedSubtotal));
    }
  }, []);

  console.log(subtotal, cartItems);
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
                  <div>Eligible for FREE Shipping</div>
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
      <div className= "pay_box">
        <div>Order Summary</div>
        <div>Items:{subtotal}</div>
        <div>Delivery:{sub}</div>
        <div>Total:{subtotal + sub}</div>
        <div>Discount:-{sub}</div>
        <div>Order Total:{subtotal}</div>
        <div>
          Choose a payment method to continue checking out. You will still have
          a chance to review and edit your order before it is final
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

export default Payment;

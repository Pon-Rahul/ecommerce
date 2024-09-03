import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import items from "../Product";
// import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const SearchPage = () => {
  const [product, setProduct] = useState(items);
  const [cart, setCart] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (index) => {
    setCart([...cart, index]);
  };
  
  return (
    <div>
    <div>
    <Header />
    </div>
      <div>
      {product.map((o, i) => (
        <div className="product" key={i}>
          <div>
            <img src={o.image} alt="background" className="thumbnail" />
          </div>
          <div className="details">
            <div>{o.name}</div>
            <div>{o.price} (12% off)</div>
            <div>FREE delivery on {o.date}</div>
            <div>
                {cart.includes(i) ? (
                  <span>Added to cart</span>
                ) : (
                  <button
                    type="button"
                    className="button-32"
                    onClick={() => addToCart(i)}
                  >
                    Add to cart
                  </button>
                )}
              </div>
          </div>
        </div>
      ))}
      </div>
      <div>
          <Footer />
        </div>
    </div>
  );
};

export default SearchPage;

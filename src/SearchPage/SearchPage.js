import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { items } from "../Product";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const SearchPage = () => {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');  // Default is 'all'

  // Filter function based on category
  const filteredItems = category === 'all' ? items : items.filter(item => item.category === category);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (index) => {
    setCart([...cart, index]);
  };

  return (
    <div>
      <div>
        <Header setCategory={setCategory}/>
      </div>
      <div>
        {filteredItems.map((o, i) => (
          <div className="product" key={i}>
            <div>
              <img src={o.image} alt="background" className="thumbnail" />
            </div>
            <div className="details">
              <div>{o.name}</div>
              <div className="instock">In stock</div>
              <div>
                {" "}
                ₹ {o.price} ({o.percentage} off)
              </div>
              <div className="delivery">FREE delivery on {o.date}</div>
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

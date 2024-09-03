import React, { useEffect, useState } from "react";
 import "./Header.css";
 import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ()  => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    },[cartItems])

  return (
    <div className="header">
    <Link to="/">
    <img
      className="header__logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      alt ="logo"
    />
    </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <FaSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link>
          <div  className="header__option">
            <span className="header__optionLineOne">Hello rahul</span>
            <span className="header__optionLineTwo">Accounts & list</span>
          </div>
        </Link>

        <Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/cart">
          <div className="header__optionBasket">
          <FaShoppingCart />
            <span className="header__optionLineTwo header__basketCount">
            {cartItems.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
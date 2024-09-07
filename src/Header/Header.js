import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { items } from "../Product";

const Header = ({ setCategory }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const onItemClick = (itemName) => {
    setSearchQuery(itemName);
    setFilteredItems([]);
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>

        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search for items"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="header__searchIcon" />
          {filteredItems.length > 0 && (
            <div className="header__searchResults">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="header__searchItem"
                  onClick={() => onItemClick(item.name)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Rahul</span>
            <span className="header__optionLineTwo">Accounts & list</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

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
      <div className="options">
        <div onClick={() => setCategory('all')}>All products</div>
        <div onClick={() => setCategory('drone')}>Drones</div>
        <div onClick={() => setCategory('lens')}>Lens</div>
        <div onClick={() => setCategory('power')}>Power supply</div>
        <div onClick={() => setCategory('propeller')}>Propellers</div>
        <div onClick={() => setCategory('rc')}>Remote controller</div>
      </div>
    </div>
  );
};

export default Header;

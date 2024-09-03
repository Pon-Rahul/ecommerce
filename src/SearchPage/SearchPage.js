import React, { useState } from "react";
import "./SearchPage.css";
import items from "../Product";

const SearchPage = () => {
  const [product, setProduct] = useState(items);

  return (
    <div>
      <div>
      {product.map((o, i) => (
        <div className="product">
          <div>
            <img src={o.image} alt="background" className="thumbnail" />
          </div>
          <div className="details">
            <div>{o.name}</div>
            <div>{o.price} (12% off)</div>
            <div>FREE delivery on {o.date}</div>
            <div><button className="button-32">Add to cart</button></div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SearchPage;

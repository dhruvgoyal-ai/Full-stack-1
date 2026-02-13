import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, image, inStock }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
      </div>

      <h3>{name}</h3>
      <p>₹{price}</p>
      <p className={inStock ? "stock in" : "stock out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;

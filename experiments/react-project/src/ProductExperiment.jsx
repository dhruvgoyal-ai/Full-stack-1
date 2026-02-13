import React from "react";
import ProductCard from "./components/ProductCard";

function ProductExperiment() {
  const products = [
    {
      name: "Headphones",
      price: 1999,
      image: "/headphones.jpg",
      inStock: true,
    },
    {
      name: "Mechanical Keyboard",
      price: 3499,
      image: "/mechanical.jpg",
      inStock: false,
    },
    {
      name: "Smart Watch",
      price: 4999,
      image: "/smart.jpg",
      inStock: true,
    },
  ];

  return (
    <div style={styles.container}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "40px",
    flexWrap: "wrap",
  },
};

export default ProductExperiment;

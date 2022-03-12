import React from "react";
import ProductCard from "@components/ProductCard";
import products from "@mock/products.json";
import "@styles/productList.scss";

const ProductList = () => {
  const productListRender = products.map(({ id, image, name, price }) => {
    return <ProductCard key={id} image={image} name={name} price={price} />;
  });
  return (
    <section className="main-container">
      <div className="cards-container">{productListRender}</div>
    </section>
  );
};

export default ProductList;

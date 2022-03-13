import React from "react";
import ProductCard from "@components/ProductCard";
import useGetProducts from "@hooks/useGetProducts";
import "@styles/productList.scss";

const ProductList = () => {
  const products = useGetProducts();
  const productListRender = products.map(({ id, images, title, price }) => {
    return (
      <ProductCard key={id} image={images[0]} title={title} price={price} />
    );
  });
  return (
    <section className="main-container">
      <div className="cards-container">{productListRender}</div>
    </section>
  );
};

export default ProductList;

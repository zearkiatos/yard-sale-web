import React, { useContext, useEffect } from "react";
import ProductCard from "@components/ProductCard";
import useGetProducts from "@hooks/useGetProducts";
import AppContext from "@context/AppContext";
import "@styles/productList.scss";

const ProductList = () => {
  const products = useGetProducts();
  const { state, addProducts } = useContext(AppContext);
  useEffect(() => {
    addProducts(products);
  }, [products]);
  const productListRender = state.products.map(
    ({ id, images, title, price, added }) => {
      return (
        <ProductCard
          key={id}
          id={id}
          image={images[0]}
          title={title}
          price={price}
          added={added}
        />
      );
    }
  );
  return (
    <section className="main-container">
      <div className="cards-container">{productListRender}</div>
    </section>
  );
};

export default ProductList;

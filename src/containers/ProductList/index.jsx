import React, { useState, useEffect  } from "react";
import axios from 'axios';
import ProductCard from "@components/ProductCard";
import "@styles/productList.scss";
import config from '@config';

const API = `${config.YARD_SALE_API_BASE_URL}/products`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  const productListRender = products.map(({ id, images, title, price }) => {
    return <ProductCard key={id} image={images[0]} title={title} price={price} />;
  });
  return (
    <section className="main-container">
      <div className="cards-container">{productListRender}</div>
    </section>
  );
};

export default ProductList;

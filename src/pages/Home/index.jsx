import React, { Fragment } from "react";
import Header from "@components/Header";
import ProductList from "@containers/ProductList";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <ProductList />
    </Fragment>
  );
};

export default Home;

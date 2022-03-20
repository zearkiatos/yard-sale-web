import { useState, useEffect } from "react";
import axios from "axios";
import config from "@config";

const API = `${config.YARD_SALE_API_BASE_URL}/products`;

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    const dataMapped = response.data.map(product => ({...product, added: false}))
    setProducts(dataMapped);
  }, []);

  return products;
};

export default useGetProducts;

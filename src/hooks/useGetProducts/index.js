import { useState, useEffect } from "react";
import axios from "axios";
import config from "@config";

const API = `${config.YARD_SALE_API_BASE_URL}/products`;

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return products;
};

export default useGetProducts;

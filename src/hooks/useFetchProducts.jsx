import React, { useState } from "react";
import { useEffect } from "react";

export default function useFetchProducts() {
  const [data, setData] = useState();
  const [companies, setCompanies] = useState(["all"]);

  const fetchProducts = async () => {
    const URL = "https://www.course-api.com/react-store-products";
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setData(data);
  };
  const getCategory = () => {
    if (data) {
      const categories = new Set();
      data.map((el) => categories.add(el.company));
      setCompanies(["all", ...categories]);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    getCategory();
  }, [data]);
  console.log(data);
  console.log(companies, "comp in FETCH");
  return { data, companies };
}

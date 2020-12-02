import React, { useEffect, useState } from "react";
import axios from "axios";
// http://localhost:8000/api/v1/media

const ProductScreen = () => {
  const [data, setData] = useState({ products: [] });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/v1/media");
      console.log(response);
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {data.products.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default ProductScreen;

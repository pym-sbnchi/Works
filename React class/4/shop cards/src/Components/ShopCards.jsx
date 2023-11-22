import React, { useState } from "react";
import Cards from "./Cards";
import { useEffect } from "react";

export default function ShopCards() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((shopCards) => setData(shopCards));
  }, []);
  return (
    <div className="d-flex row shopCards">
      {data?.map((item, index) => {
        return <Cards key={index} item={item} />;
      })}
    </div>
  );
}

import React, { useState } from "react";
import Item from "./Item";
import { useEffect } from "react";

export default function Api() {
  const [data, setData] = useState();
  const [input, setInput] = useState();
  useEffect(() => {
    fetch(input)
      .then((res) => res.json())
      .then((shopCards) => setData(shopCards));
  }, [input]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Use the API link below"
      />
      <p>https://fakestoreapi.com/products</p>
      <div className="d-flex row shopCards">
        {data?.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </>
  );
}

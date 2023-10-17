import React from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function Slider() {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const show = await fetch(`https://restcountries.com/v3.1/all`);
      await show.json;
    })();

    setTimeout(() => {
      (async () => {
        const secondShow = await fetch(`https://fakestoreapi.com/products`);
        const secondShowJson = await secondShow.json();
        await setData(secondShowJson);
      })();
    }, 4000);
  }, []);
  const next = () => {
    setIndex(index < data.length - 1 ? index + 1 : 0);
  };
  const prev = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  return (
    <>
      {data ? (
        <div className="cards">
          <Arrow direction={"prev"} handling={prev} />
          <Card data={data[index]} />
          <Arrow direction={"next"} handling={next} />
        </div>
      ) : (
        <div className="p-5 h100 d-flex align-items-center justify-content-center">
          <ColorRing/>
        </div>
      )}
    </>
  );
}

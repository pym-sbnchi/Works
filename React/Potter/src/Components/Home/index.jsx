import React, { useEffect, useState } from "react";
import Card from "../Card";
import { ProgressBar } from "react-loader-spinner";

export default function Home() {
  const [data, setData] = useState();
  const getUrl = "https://hp-api.onrender.com/api/characters"
  useEffect(() => {
    fetch(getUrl)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  const characters = data?.map((e, index) => 
    <Card
      key={index}
      image={e.image}
      name={e.name}
      house={e.house}
      actor={e.actor}
    />);
  return (
    <>
      {!data ? (
        <ProgressBar
          style={{
            height: "80",
            width: "80",
            ariaLabel: "progress-bar-loading",
            wrapperClass: "progress-bar-wrapper",
            borderColor: "#2b3f3a",
            barColor: "#0e1733",
            margin:"auto"
          }}
        />
      ) : (
        <div className="d-flex flex-wrap">{characters}</div>
      )}
    </>
  );
}

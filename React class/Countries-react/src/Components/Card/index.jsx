import React from "react";
import "./style.css";

export default function Card({ image , name , capital}) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={image} alt="..." />
          </div>
          <div className="text">
            <p className="name">
              Country name: <span>{name}</span>
            </p>
            <p className="capital">
              Capital of the country: <span>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

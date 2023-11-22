import React from "react";
import "./style.css";

export default function Card({ image , name , house , actor}) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={image} alt="..." />
          </div>
          <div className="text">
            <p className="name">
              Name: <span>{name}</span>
            </p>
            <p className="house">
              House: <span>{house}</span>
            </p>
            <p className="actor">
              The actor name is: <span>{actor}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

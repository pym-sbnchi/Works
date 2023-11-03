import React from "react";

export default function Item({ item }) {
  return (
    <div className="card w-100">
      <img
        className="card-img-top"
        style={{ height: "150px" }}
        src={item.image}
      />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.description}</p>
        <p className="btn bg-success bg-gradient w-100">{item.price}</p>
      </div>
    </div>
  );
}

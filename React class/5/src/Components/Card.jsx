import React from "react";

export default function Card({ data }) {
  const { image, description, category, price, title } = data;
  return (
    <>
      <div className="w-50 d-flex align-items-center justify-content-center bg show-card">
        <div className="d-flex flex-column align-items-center justify-content-center pro">
          <div className="w-100 card-div">
            <img src={image} alt="" className="w-50 my-3 kh" />
          </div>
          <div className="text-center text">
            <h2 >{title}</h2>
            <p >{category}</p>
            <p >{description.slice(0, 100)} . . .</p>
            <p className="text-danger">{price}</p>
            <button className="btn btn-success buy">click Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

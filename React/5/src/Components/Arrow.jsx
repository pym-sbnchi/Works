import React from "react";

export default function Arrow({direction,handling}) {
  return (
    <>
      <div className="arrow-wrapper" onClick={handling}>
        <div className="round">
          <div id="cta">
            <span className={`arrow {direction} btn`}>{direction}</span>
          </div>
        </div>
      </div>
    </>
  );
}

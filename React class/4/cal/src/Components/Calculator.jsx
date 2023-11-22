import React, { useState } from "react";

export default function Calculator() {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState();
  const handelClick = () => {
    switch (operator) {
      case "+":
        setResult(+numOne + +numTwo);
        break;
      case "-":
        setResult(+numOne - +numTwo);
        break;
      case "*":
        setResult(+numOne * +numTwo);
        break;
      case "/":
        setResult(+numOne / +numTwo);
        break;
    }
    setNumOne("");
    setNumTwo("");
    setOperator("");
  };
  return (
    <>
      <input
        type="text"
        value={numOne}
        placeholder="First number"
        onChange={(e) => {
          setNumOne(e.target.value);
        }}
      />
      <input
        type="text"
        value={operator}
        placeholder="Operator"
        onChange={(e) => {
          setOperator(e.target.value);
        }}
      />
      <input
        type="text"
        value={numTwo}
        placeholder="Second number"
        onChange={(e) => {
          setNumTwo(e.target.value);
        }}
      />
      <button onClick={handelClick}>=</button>
      <p>{result}</p>
    </>
  );
}

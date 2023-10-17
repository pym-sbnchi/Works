import React, { useState, useCallback, useEffect } from "react";

export default function UseCallBack() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  // use one of these sum to see the different between using or not using callback hook

  //   const sum = () => num1 + num2;
  const sum = useCallback(() => num1 + num2, [num1, num2]);

  useEffect(() => {
    console.log(`New sum: value ${sum()}}`);
    setResult(sum());
  }, [sum]);

  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <h1>Output: {userInput || "--"}</h1>
        <p>Result: {JSON.stringify(result)}</p>
      </div>
    </>
  );
}

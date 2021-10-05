import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1> */}
      <h1>{text || "Irochka is super"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {/* {text && "hello world"}
      {!text && "hello world"} */}
      {isError && <h1>Error...</h1>}
      {isError ? "the statement is true" : "the statement is false"}
    </>
  );
};

export default ShortCircuit;

import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello Irochka"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random titel");
  const handleClick = () => {
    if (text === "random titel") {
      setText("hello world");
    } else {
      setText("random titel");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        click me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

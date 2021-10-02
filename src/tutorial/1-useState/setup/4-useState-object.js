import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Irina",
    age: 30,
    message: "You are the best",
  });

  const [name, setName] = useState("Philip");
  const [age, setAge] = useState(32);
  const [message, setMessage] = useState("the best muzh");

  const changeMessage = () => {
    // setPerson({ ...person, message: "you are a star" });
    setMessage("you are a star");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

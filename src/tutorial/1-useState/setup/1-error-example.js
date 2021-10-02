import React from "react";

const ErrorExample = () => {
  let titel = "Random titel";
  const handleClick = () => {
    titel = "hello stranger";
    console.log(titel);
  };
  return (
    <React.Fragment>
      <h2>{titel}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change the titel
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

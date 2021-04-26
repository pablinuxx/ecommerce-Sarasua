import React, { useState } from "react";

export const ItemCount = ({stock}) => {
  const [count, setCount] = useState(stock);
  const Aumentar = () => {
    setCount(count + 1);
  };
  const Restar = () => {
    count === stock ? alert("Limite de Stock") : setCount(count - 1);
  };
  return (
    <>
      <div className="d-inline  mt-5 bg-white m-5 p-3">
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={Aumentar}
        >
          +
        </button>
        <span className="mx-3">{count}</span>
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={Restar}
        >
          -
        </button>
      </div>
    </>
  );
};

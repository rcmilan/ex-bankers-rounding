import React from "react";

function MoneyInput({ text, update }) {
  return (
    <>
      <div>
        <div>{text}</div>
        <input type="text" onChange={(e) => update(e.target.value)} />
      </div>
    </>
  );
}

export default MoneyInput;

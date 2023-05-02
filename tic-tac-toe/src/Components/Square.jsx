import React from "react";

export default function Square({ data, rowIndex, colIndex, onClickHandler }) {
  return (
    <div>
      <button
        onClick={() => {
          onClickHandler(rowIndex, colIndex);
        }}
        style={{ width: "100%", height: "100%" }}
        className="square"
      >
        {data === -1 ? "" : data === 0 ? "X" : "O"}
      </button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Square from "./Square";
import { numToPlayer, updateMatrix } from "../utils";

export const Board = ({ currentPlayer, setCurrentPlayer }) => {
  const [matrix, setMatrix] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);
  useEffect(() => {
    console.log(matrix);
  }, [matrix]);

  const onClickHandler = (rowIndex, colIndex) => {
    if (matrix[rowIndex][colIndex] !== -1) return;
    if (currentPlayer === 0) {
      setCurrentPlayer(1);
    } else {
      setCurrentPlayer(0);
    }
    setMatrix(updateMatrix(rowIndex, colIndex, matrix, currentPlayer));
  };
  return (
    <div className="board">
      {matrix.map((element, rowIndex) => {
        return element.map((data, colIndex) => {
          return (
            <Square
              onClickHandler={onClickHandler}
              rowIndex={rowIndex}
              colIndex={colIndex}
              data={data}
            />
          );
        });
      })}
    </div>
  );
};

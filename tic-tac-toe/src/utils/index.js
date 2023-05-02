export const numToPlayer = (currentPlayer) => {
  return currentPlayer === 0 ? "X" : "O";
};

export const updateMatrix = (row, col, matrix, newVal) => {
  return matrix.map((el1, rowIndex) => {
    return el1.map((el2, colIndex) => {
      if (rowIndex === row && colIndex === col) return newVal;
      return el2;
    });
  });
};

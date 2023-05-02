import { useState } from "react";
import { Board } from "./Board";

export default function Game() {
  // 0=X and 1=O
  const [currentPlayer, setCurrentPlayer] = useState(0);
  return (
    <div>
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <div className="status">
        Next player: {currentPlayer === 0 ? "X" : "O"}
      </div>
      <div className="restart">
        <button>restart</button>
      </div>
    </div>
  );
}

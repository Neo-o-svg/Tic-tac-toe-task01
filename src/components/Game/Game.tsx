import { useState } from "react";
import Board, { calculateWinner } from "../Board/Board";
import type { SquareValue } from "../Square/Square";

function isDraw(squares: SquareValue[]): boolean {
  return (
    squares.every((square) => square !== null) && !calculateWinner(squares)
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [winner, setWinner] = useState<SquareValue>(null);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
    setWinner(null);
  }

  const moves = history.map((_, move) => {
    const description = move > 0 ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="container">
        <div className="game__wrapper">
          <h1 className="game__title">Nine Stones of Destiny</h1>

          <div className="game__players-imgs">
            <img
              src="./img/player-X.jpg"
              alt="Player X picture"
              className={`${
                winner
                  ? winner === "X"
                    ? "winner"
                    : ""
                  : isDraw(currentSquares)
                  ? "draw"
                  : xIsNext
                  ? "active"
                  : ""
              }`}
            />
            <img
              src="./img/player-O.jpg"
              alt="Player O picture"
              className={`${
                winner
                  ? winner === "O"
                    ? "winner"
                    : ""
                  : isDraw(currentSquares)
                  ? "draw"
                  : !xIsNext
                  ? "active"
                  : ""
              }`}
            />
          </div>

          <div className="game__content">
            <div className="game__board">
              <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
                onWin={setWinner}
              />
            </div>
            <div className="game__info">
              <ol className="game__move-list">{moves}</ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

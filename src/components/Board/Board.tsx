import Square, { type SquareValue } from "../Square/Square";

export function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

interface BoardProps {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
  onWin?: (winner: SquareValue) => void; 
}

export default function Board({ xIsNext, squares, onPlay, onWin }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);

    const winner = calculateWinner(nextSquares);
    if (winner && onWin) {
      onWin(winner);
    }
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="board-wrapper">
      <div className="status">{status}</div>
      <div className="board">
        {[0, 3, 6].map((rowStart) => (
          <div key={rowStart} className="board__row">
            {[0, 1, 2].map((offset) => (
              <Square
                key={rowStart + offset}
                value={squares[rowStart + offset]}
                onSquareClick={() => handleClick(rowStart + offset)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // Arrays.prototype.slice() 返回一个新的数组
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    // 闭包
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          // onXxxx 表示代表事件的 props
          // handleXxx 表示处理事件的函数
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

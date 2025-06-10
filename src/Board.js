import {useState} from "react";
import Square from "./Square";


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board({xIsNext, squares, onPlay}) {

  function handleClick(i) {
    // 如果 squares[i] 有值，说明这个格子已经被点击过了
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // Arrays.prototype.slice() 返回一个新的数组
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner:" + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (<>
    <div className="status">{status}</div>
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
      <Square value={squares[3]}
              onSquareClick={() => {
                handleClick(3);
              }}/>
      <Square value={squares[4]}
              onSquareClick={() => {
                handleClick(4);
              }}/>
      <Square value={squares[5]}
              onSquareClick={() => {
                handleClick(5);
              }}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]}
              onSquareClick={() => {
                handleClick(6);
              }}/>
      <Square value={squares[7]}
              onSquareClick={() => {
                handleClick(7);
              }}/>
      <Square value={squares[8]}
              onSquareClick={() => {
                handleClick(8);
              }}/>
    </div>
  </>);
}
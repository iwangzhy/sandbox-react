import {useState} from "react";
import Board from "./Board";

export default function Game() {
    // 下一步是不是 X
    const [xIsNext, setXIsNext] = useState(true);
    // 操作历史记录
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // 当前快照索引
    const [currentMove, setCurrentMove] = useState(0);
    // 快照
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((_, move) => {
        return (
            // key 必须
            <li key={move}>
                {/*点击跳转到指定步骤*/}
                <button onClick={() => jumpTo(move)}>
                    {
                        move > 0
                            ? 'Go to move #' + move
                            : 'Go to game start'
                    }
                </button>
            </li>
        );
    });

    return (<>
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    </>);
};
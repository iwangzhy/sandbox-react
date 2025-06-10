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
    let status = winner ? "winner:" + winner : "Next player: " + (xIsNext ? "X" : "O");

    return (
        <>
            <div className="status">{status}</div>
            {
                Array.from({length: 3}, (_, rowIdx) => (
                    <div className="board-row" key={rowIdx}>
                        {Array.from({length: 3}, (_, colIdx) => {
                            const idx = rowIdx * 3 + colIdx;
                            return (
                                <Square
                                    key={idx}
                                    value={squares[idx]}
                                    onSquareClick={() => handleClick(idx)}
                                />
                            );
                        })}
                    </div>
                ))
            }
        </>
    );
}
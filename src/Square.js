export default function Square({idx, value, onSquareClick}) {
    return (<button className="square" onClick={onSquareClick}>
        {value}
    </button>);
}



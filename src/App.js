import React, {useState} from "react";
import Board from './components/Board';
import { calculateWinner } from "./helpers";
import './styles/Root.scss';

const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const lookAtBoard = () => {
        console.clear();
        console.log(board);
    }
    lookAtBoard();

    const winner = calculateWinner(board);
    const message = winner ? `winner is ${winner}` : `next player is ${isXNext ? 'X' : 'O'}`;

    const handleSquareClick = (position) => {  
        if(board[position] || winner){
            return;
        }
        
        setBoard((prev) => {
            return prev.map((square, index) => {                
                if(index === position){
                    return isXNext? 'X' : 'O';
                }                
                return square;
            })
        })

        setIsXNext((prev) => !prev)
    };

    return(
        <div className="app">
            <h1>Welcome to Tic Tac Toe game!</h1>
            <h2> {message} </h2>
            <Board board={board} handleSquareClick={handleSquareClick} />
        </div>
    )
    
}

export default App;


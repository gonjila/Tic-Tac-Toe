import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';
import './styles/Root.scss';

const NEW_GAME = [ {board: Array(9).fill(null), isXNext: true} ]

const App = () => {
    const [history, setHistory] = useState(NEW_GAME);
    const [currentMove, setCurrentMove] = useState(0);
    const current = history[currentMove];
    
    const {winner, winningSquare} = calculateWinner(current.board);

    const handleSquareClick = (position) => {  
        if(current.board[position] || winner){
            return;
        }
        
        setHistory((prev) => {
            const last = prev[prev.length - 1]; 

            const newBoard = last.board.map((square, index) => {                
                if(index === position){
                    return last.isXNext? 'X' : 'O';
                }                
                return square;
            })
            return prev.concat({ board: newBoard, isXNext: !last.isXNext })
        })

        setCurrentMove(prev => prev + 1)
    };

    const moveTo = (move) => {
        setCurrentMove(move);
    };

    const onNewGame = () => {
        setHistory(NEW_GAME);
        setCurrentMove(0)
    }

    return(
        <div className="app">
            <h1>Welcome to Tic Tac Toe game!</h1>
            <StatusMessage winner={winner} current={current} />
            <Board board={current.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare} />
            <button type="button" onClick={onNewGame} >Start new game!</button>
            <History history={history} moveTo={moveTo} currentMove={currentMove} />
        </div>
    )
    
}

export default App;
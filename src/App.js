import React from "react";
import Board from './components/Board';
import './styles/Root.scss';

const App = () => {
    return(
        <div>
            <h1>Welcome to Tic Tac Toe game!</h1>
            <Board />
        </div>
    )
    
}

export default App;


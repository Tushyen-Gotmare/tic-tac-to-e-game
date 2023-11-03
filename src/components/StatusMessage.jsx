
import React from 'react';

const StatusMessage = ({winner, isXNext, squares}) => {
    const noMovesLeft = squares.every(squareValue => squareValue !== null);

    const nextPlayer = isXNext ? 'X' : '0';
   const statusMessage = winner ? `winner is ${winner}` : `Next player is ${nextPlayer}`;
   const renderStatusMessage = () => {
    if(winner){
        return <React.Fragment>winner is {''} <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span></React.Fragment>;
    }

    if(!winner && noMovesLeft){
        return <React.Fragment><span className="text-orange">0 </span>and <span className="text-green">X</span> tied</React.Fragment>;
    }
    if(!winner && !noMovesLeft){
        return <React.Fragment> Next player is <span className={isXNext ? 'text-green' : 'text-orange'}> {nextPlayer}</span></React.Fragment>;
    }
    return null;
   };

    return <h2 className="status-message">{renderStatusMessage()}</h2>
};

export default StatusMessage;
import { useState } from "react";
import './styles.scss'
import {calculateWinner} from './winner'
// import Square from './components/Square'
import Board from './components/Board'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
   const [isXNext, setIsXNext] = useState(false);
  
   const winner =calculateWinner(squares);
   const nextPlayer = isXNext ? 'X' : '0';
   const statusMessage = winner ? `winner is ${winner}` : `Next player is ${nextPlayer}`

   const handleSquareClick = clickedPosition =>{

      if (squares[clickedPosition] || winner ){
         return;
      }

      setSquares((currentSquares) => {

         return currentSquares.map((sqaureValue, position) => {
            if(clickedPosition === position){
               return isXNext  ?'X' : '0';
            }
            return sqaureValue;

         })
      }
      )
      setIsXNext((currentIsXNext)  => !currentIsXNext)

   };

  return (
    
    <div className='app'>
      <h3>{statusMessage}</h3>
    
    <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
     
  );
}

export default App;

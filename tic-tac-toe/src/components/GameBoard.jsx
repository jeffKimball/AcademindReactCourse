import { useState } from 'react'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const GameBoard = ({onSquareClick, turns}) => {
  let gameboard = initialGameBoard


  for(const turn of turns){
    const {square, player} = turn
    const {row, col} = square
    
    gameBoard[row][col] = player
  }

  const [gameBoard, setGameBoard] =  useState(initialGameBoard)

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard)=> {
      const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])]

      updatedBoard[rowIndex][colIndex] = activePlayerSymbol      
      return updatedBoard
    })

    onSquareClick()
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSquareClick(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;

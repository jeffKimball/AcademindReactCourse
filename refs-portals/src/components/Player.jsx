import { useState, useRef } from 'react'


export default function Player() {
  const playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState('') 

  const handleSubmit = () => {
    setEnteredPlayerName(playerName.current.value)
  } 
 
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName.trim() ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input 
          ref={playerName}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

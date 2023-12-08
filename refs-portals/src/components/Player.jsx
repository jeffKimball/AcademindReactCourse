import { useState } from 'react'

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [displayName, setDisplayName] = useState('unknown entity');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEnteredPlayerName(e.target.value);
  };

  const handleSubmit = () => {
    setDisplayName(enteredPlayerName);
    setSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? displayName : 'unknown entity'}</h2>
      <p>
        <input 
          value={enteredPlayerName} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

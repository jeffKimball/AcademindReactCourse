import { useState} from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1

  const handleChange = (inputIndentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: newValue,
      };
    });
  };

  return (
    <>
      <Header /> 
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className='center'>Enter a duration greater than zero</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App 

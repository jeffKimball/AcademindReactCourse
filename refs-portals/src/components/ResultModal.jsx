
const ResultModal = ({result, targetTime}) => {
  return (
    <dialog className="result-modal">
        <h2>You {result}</h2>
        <p>
            The target time was <strong>{targetTime}</strong>
        </p>
        <p>
            Time stopped with <strong>X seconds</strong> seconds left
        </p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
  )
}

export default ResultModal
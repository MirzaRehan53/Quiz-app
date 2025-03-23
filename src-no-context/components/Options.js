export default function Options({
  options,
  dispatch,
  answer,
  correctAnswer,
  points,
}) {
  console.log(options);

  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option 
    ${index === answer ? "answer" : ""}
    ${hasAnswered && (index === correctAnswer ? "correct" : "wrong")}`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

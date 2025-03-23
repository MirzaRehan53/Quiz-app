export default function StartScreen({ questionsLength, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Quiz App!</h2>
      <h3>{questionsLength} questions to test your mastery</h3>
      <buttton
        className="btn btn-ui"
        onClick={() => {
          return dispatch({ type: "start" });
        }}
      >
        Let's Start
      </buttton>
    </div>
  );
}

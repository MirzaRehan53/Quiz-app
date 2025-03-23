import Options from "./Options";
export default function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        <Options
          options={question.options}
          dispatch={dispatch}
          answer={answer}
          correctAnswer={question.correctOption}
          points={question.points}
        />
      </div>
    </div>
  );
}

import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
export default function Question() {
  const { question, dispatch, answer } = useQuiz();
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

import Main from "./Main";
import Header from "./Header";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Error from "./Error";
import Loader from "./Loader";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { QuizProvider, useQuiz } from "../context/QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <QuizProvider>
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Question />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </>
          )}

          {status === "finish" && <FinishScreen />}
        </Main>
      </QuizProvider>
    </div>
  );
}
export default App;

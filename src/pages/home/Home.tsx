import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "../../components/questionCard/QuestionCard";
import { QUESTIONS, TIMER_MILLISECOND } from "../../constants";
import * as homeActions from "./redux/homeActions";
import { useEffect, useState } from "react";
import "./home.scss";
import { toast } from "react-toastify";
import { millisecondToMinuteSecond } from "../../utils";
import { SurveyState } from "./redux/homeSlice";
import WelcomeCard from "../../components/welcomeCard/WelcomeCard";
import ResultCard from "../../components/resultCard/ResultCard";
import { motion } from "framer-motion";

function Home() {
  // * state management home
  const homeState: SurveyState = useSelector((state: any) => state.home);
  const { currentQuestionIndex, timer, surveyResponses } = homeState;

  const dispatch = useDispatch();

  const [currentTimer, setCurrentTimer] = useState(timer);
  const [currentAnswer, setCurrentAnswer] = useState<number>(-1);
  const [showResult, setShowResult] = useState(false);

  function handleChangeQuestion(e: React.ChangeEvent<HTMLInputElement>) {
    const answer = +e.target.value;
    setCurrentAnswer(answer);
  }

  // * handle click next question
  function handleClickNext() {
    if (currentAnswer < 0) {
      toast.error("Please choose one option");
      return;
    }
    const data = {
      questionIndex: currentQuestionIndex,
      answerIndex: currentAnswer,
    };
    dispatch(homeActions.answerQuetion({ ...data }) as any);
    setCurrentAnswer(-1);
  }

  useEffect(() => {
    // * welcome card
    if (currentQuestionIndex < 0) return;

    // * check current timer eq 0 or finish answering question show result
    if (currentTimer === 0 || currentQuestionIndex == QUESTIONS.length) {
      setShowResult(true);
      return;
    }

    // * timer countdown
    const intervalTimer = setInterval(() => {
      setCurrentTimer((prevTimer) => prevTimer - 1000);
      dispatch(homeActions.updateTimer(currentTimer) as any);
    }, 1000);

    return () => clearInterval(intervalTimer);
  }, [currentTimer, currentQuestionIndex]);

  // * handle start survey welcome card
  function handleStartSurvey() {
    dispatch(homeActions.updatePageQuestion() as any);
  }

  // * handle restart survey
  function handleRestart() {
    dispatch(homeActions.resetSurvey() as any);
    setShowResult(false);
    setCurrentTimer(TIMER_MILLISECOND);
  }

  if (showResult) {
    return (
      <div className="home">
        <ResultCard results={surveyResponses} />
        <motion.button
          className="button"
          onClick={handleRestart}
          whileTap={{ scale: 0.85 }}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          Submit another response
        </motion.button>
      </div>
    );
  }

  return (
    <div className="home">
      {currentQuestionIndex < 0 ? (
        <>
          <WelcomeCard />
          <motion.button
            className="button"
            onClick={handleStartSurvey}
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            Take me there!
          </motion.button>
        </>
      ) : (
        <>
          <div className="timer">
            <span>{millisecondToMinuteSecond(currentTimer)}</span>
          </div>
          {QUESTIONS.map(
            ({ question, options }, index) =>
              currentQuestionIndex == index && (
                <QuestionCard
                  key={index}
                  current={index + 1}
                  question={question}
                  options={options}
                  onChange={handleChangeQuestion}
                  checkedIndex={currentAnswer}
                />
              )
          )}
          <motion.button
            className="button"
            onClick={handleClickNext}
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            Next
          </motion.button>
        </>
      )}
      {}
    </div>
  );
}

export default Home;

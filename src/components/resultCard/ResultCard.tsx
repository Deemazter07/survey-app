import { QUESTIONS } from "../../constants";
import { SurveyResponse } from "../../pages/home/redux/homeSlice";
import { cardAnimation } from "../../utils/motion";
import RadioButton from "../radiobutton/RadioButton";
import "./resultCard.scss";
import { motion } from "framer-motion";

interface ResultsCardProps {
  results: SurveyResponse[];
}

function ResultCard({ results }: ResultsCardProps) {
  return (
    <motion.div
      className="resultCard"
      variants={cardAnimation(0.1)}
      initial="hidden"
      whileInView="show"
    >
      <div className="item">
        {results.length !== 0 ? (
          <>
            <h2 className="title">Thank you for your participation! ✨</h2>
            {results.map((results, index) => (
              <div key={index}>
                <h2 className="title">
                  {QUESTIONS[results.questionIndex].question}
                </h2>
                <div className="options">
                  {QUESTIONS[results.questionIndex].options.map(
                    (option, index) => (
                      <RadioButton
                        key={index}
                        name={option}
                        text={option}
                        id={option}
                        value={index}
                        onChange={() => {}}
                        checked={index === results.answerIndex}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <h2 className="title">
            It's so strange...
            <br />I didn't receive any answer here
          </h2>
        )}
      </div>
    </motion.div>
  );
}

export default ResultCard;

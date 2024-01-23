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
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="item">
        <h2 className="title">I have your result here! ✨</h2>
        {results.map((results, index) => (
          <div key={index}>
            <h2 className="title">
              {QUESTIONS[results.questionIndex].question}
            </h2>
            <div className="options">
              {QUESTIONS[results.questionIndex].options.map((option, index) => (
                <RadioButton
                  key={index}
                  name={option}
                  text={option}
                  id={option}
                  value={index}
                  onChange={() => {}}
                  checked={index === results.answerIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ResultCard;

import { cardAnimation } from "../../utils/motion";
import RadioButton from "../radiobutton/RadioButton";
import "./questionCard.scss";
import { motion } from "framer-motion";

export interface QuestionCardInterface {
  current?: number;
  question: string;
  options: string[];
}

interface QuestionCardProps extends QuestionCardInterface {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedIndex: number;
}

function QuestionCard({
  current,
  question,
  options,
  onChange,
  checkedIndex,
}: QuestionCardProps) {
  return (
    <motion.div
      className="questionCard"
      variants={cardAnimation(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="item">
        <h4 className="count">Q{current}</h4>

        <h1 className="title">{question}</h1>

        <div className="options">
          {options.map((option, index) => (
            <RadioButton
              key={index}
              name={option}
              text={option}
              id={option}
              value={index}
              onChange={onChange}
              checked={index == checkedIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default QuestionCard;

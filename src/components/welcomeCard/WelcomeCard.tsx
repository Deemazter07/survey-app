import { cardAnimation } from "../../utils/motion";
import "./welcomeCard.scss";
import { motion } from "framer-motion";

function WelcomeCard() {
  return (
    <motion.div
      className="welcomeCard"
      variants={cardAnimation(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="item">
        <h1 className="title">Hey There! ✨</h1>
        <p className="subTitle">
          Help us understand you better! Take our survey and share your
          thoughts.
        </p>
      </div>
    </motion.div>
  );
}

export default WelcomeCard;

import "./errorBoundary.scss";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardAnimation } from "../../utils/motion";

function ErrorBoundary() {
  return (
    <div className="main">
      <div className="container">
        <div className="errorContainer">
          <motion.div
            className="errorCard"
            variants={cardAnimation(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="item">
              <div>
                <h1 className="title">
                  Uh oh! Looks like you found nothing here.
                </h1>
                <br />
                <p className="subTitle">Don't you dare to come here again!</p>
              </div>
            </div>
          </motion.div>
          <motion.button
            className="button"
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Link to={"/"}>Go to right place</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;

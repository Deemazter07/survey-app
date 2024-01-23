import { QuestionCardInterface } from "../components/questionCard/QuestionCard";

const QUESTIONS: QuestionCardInterface[] = [
  {
    question: "How often do you use web applications?",
    options: ["Daily", "Weekly", "Monthly"],
  },
  {
    question: "What type of web apps do you use most frequently?",
    options: ["Social Media", "Productivity", "Entertainment"],
  },
  {
    question:
      "How satisfied are you with the user interface of your favorite web app?",
    options: ["Very satisfied", "Somewhat satisfied", "Not satisfied"],
  },
  {
    question: "What features do you prioritize in a web app? Choose one:",
    options: ["Speed", "Functionality", "User-friendly design"],
  },
  {
    question:
      "How likely are you to recommend a well-designed web app to a friend or colleague?",
    options: ["Very likely", "Neutral", "Not likely"],
  },
  {
    question: "What factors influence your decision to use a new web app?",
    options: ["Recommendations", "Reviews", "Brand reputation"],
  },
  {
    question:
      "How important is data privacy and security to you when using a web app?",
    options: ["Extremely important", "Important", "Not important"],
  },
  {
    question: "Which device do you prefer using for web applications?",
    options: ["Desktop", "Laptop", "Mobile"],
  },
  {
    question: "How often do you update your web browsers?",
    options: ["Regularly", "Occasionally", "Rarely"],
  },
  {
    question:
      "What improvement would you like to see in your favorite web app?",
    options: ["Better performance", "More features", "Improved user support"],
  },
];

const TIMER_MILLISECOND = 180000;
// const TIMER_MILLISECOND = 18000;

export { QUESTIONS, TIMER_MILLISECOND };

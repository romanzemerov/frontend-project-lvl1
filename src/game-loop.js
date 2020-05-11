import readlineSync from "readline-sync";
import { getUserName } from "./userIdentification.js";

const ROUNDS = 3;

const gameLoop = ({
  generateQuestion,
  processingUserAnswer,
  getCorrectAnswer,
}) => {
  const getCongratulations = () => {
    return `Congratulations, ${getUserName()}!`;
  };

  const getErrorMessage = (correctAnswer, wrongAnswer) => {
    return `${wrongAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${getUserName()}!`;
  };

  let finalMessage = getCongratulations();

  for (let i = 0; i < ROUNDS; i += 1) {
    console.log(`Question: ${generateQuestion()}`);

    const answer = readlineSync.question("Your answer: ");
    const isCorrectAnswer = processingUserAnswer(answer);

    if (!isCorrectAnswer) {
      finalMessage = getErrorMessage(getCorrectAnswer(), answer);
      break;
    }

    console.log("Correct!");
  }

  console.log(finalMessage);
};

export default gameLoop;

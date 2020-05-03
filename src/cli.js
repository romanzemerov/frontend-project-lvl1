import readlineSync from "readline-sync";
import { randomInteger, isEven, getKeyByValue } from "./utils.js";

let name = null;

export const userIdentification = () => {
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};

export const printSuccessMessage = () => {
  console.log("Correct!");
};

export const printErrorMessage = (correctAnswer, wrongAnswer) => {
  console.log(
    `${wrongAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`
  );
};

export const printCongratulations = () => {
  console.log(`Congratulations, ${name}!`);
};

const correctAnswersForWin = 3;
const answerToBollean = {
  yes: true,
  no: false,
};

let correctAnswersCount = 0;
let currentQuestionNumber = null;
let correctAnswer = null;
let userAnswer = null;

const isCorrectAnswer = (num, answer) => {
  correctAnswer = isEven(num);

  if (typeof answer === "boolean") {
    if (answer === correctAnswer) {
      return true;
    }
  }

  return false;
};

const normalizeUserAnswer = (answer) => {
  if (answer in answerToBollean) {
    return answerToBollean[answer];
  }

  return answer;
};

export const isUserWin = () => correctAnswersCount >= correctAnswersForWin;

export const generateQuestion = () => {
  currentQuestionNumber = randomInteger(0, 100);
  console.log(`Question: ${currentQuestionNumber}`);
};

export const getUserAnswer = () => {
  userAnswer = normalizeUserAnswer(readlineSync.question("Your answer: "));
};

export const processingUserAnswer = () => {
  if (isCorrectAnswer(currentQuestionNumber, userAnswer)) {
    correctAnswersCount += 1;
    printSuccessMessage();
    return;
  }

  printErrorMessage(
    getKeyByValue(answerToBollean, correctAnswer),
    getKeyByValue(answerToBollean, userAnswer) || userAnswer
  );

  process.exit();
};

import { getKeyByValue, isEven, randomInteger } from "../utils.js";

const answerToBoolean = {
  yes: true,
  no: false,
};

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
  if (answer in answerToBoolean) {
    return answerToBoolean[answer];
  }

  return answer;
};

const getWelcomeMessage = () => {
  return "Welcome to the Brain Games!";
};

const getRules = () => {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
};

const generateQuestion = () => {
  currentQuestionNumber = randomInteger(0, 100);
  return currentQuestionNumber;
};

const getCorrectAnswer = () => {
  return getKeyByValue(answerToBoolean, correctAnswer);
};

const processingUserAnswer = (answer) => {
  userAnswer = normalizeUserAnswer(answer);
  return isCorrectAnswer(currentQuestionNumber, userAnswer);
};

const gameData = {
  getWelcomeMessage,
  getRules,
  generateQuestion,
  getCorrectAnswer,
  processingUserAnswer,
};

export default gameData;

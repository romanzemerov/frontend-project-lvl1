import { getKeyByValue, randomInteger } from "../utils.js";

const answerToBoolean = {
  yes: true,
  no: false,
};

let currentQuestionNumber;
let correctAnswer;
let userAnswer;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isCorrectAnswer = (num, answer) => {
  correctAnswer = isPrime(num);

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
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

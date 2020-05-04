import pairs from "@hexlet/pairs";
import { randomInteger } from "../utils.js";

let pair;
let userAnswer;
let correctAnswer;

const gcd = (num1, num2) => {
  const mod = num1 % num2;

  if (mod === 0) {
    return num2;
  }

  return gcd(num2, mod);
};

const normalizeUserAnswer = (answer) => Math.abs(Number(answer));

const isCorrectAnswer = (answer) => {
  correctAnswer = gcd(pairs.car(pair), pairs.cdr(pair));
  return answer === correctAnswer;
};

const getWelcomeMessage = () => {
  return "Welcome to the Brain Games!";
};

const getRules = () => {
  return "Find the greatest common divisor of given numbers.";
};

const generateQuestion = () => {
  pair = pairs.cons(randomInteger(0, 100), randomInteger(0, 100));
  return `${pairs.car(pair)} ${pairs.cdr(pair)}`;
};

const getCorrectAnswer = () => {
  return correctAnswer;
};

const processingUserAnswer = (answer) => {
  userAnswer = normalizeUserAnswer(answer);
  return isCorrectAnswer(userAnswer);
};

const gameData = {
  getWelcomeMessage,
  getRules,
  generateQuestion,
  getCorrectAnswer,
  processingUserAnswer,
};

export default gameData;

import pairs from "@hexlet/pairs";
import { randomInteger } from "../utils.js";

const OPERATIONS = ["+", "-", "*"];
let pair;
let sign;
let userAnswer;
let correctAnswer;

const normalizeUserAnswer = (answer) => Number(answer);

const isCorrectAnswer = (answer) => {
  switch (sign) {
    case "+": {
      correctAnswer = pairs.car(pair) + pairs.cdr(pair);
      break;
    }
    case "-": {
      correctAnswer = pairs.car(pair) - pairs.cdr(pair);
      break;
    }
    case "*": {
      correctAnswer = pairs.car(pair) * pairs.cdr(pair);
      break;
    }
    default: {
      throw new Error("Incorrect operation");
    }
  }

  return correctAnswer === answer;
};

const getWelcomeMessage = () => {
  return "Welcome to the Brain Games!";
};

const getRules = () => {
  return "What is the result of the expression?";
};

const generateQuestion = () => {
  pair = pairs.cons(randomInteger(0, 100), randomInteger(0, 100));
  sign = OPERATIONS[randomInteger(0, OPERATIONS.length - 1)];

  return `${pairs.car(pair)} ${sign} ${pairs.cdr(pair)}`;
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

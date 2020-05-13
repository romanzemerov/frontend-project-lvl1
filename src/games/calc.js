import pairs from "@hexlet/pairs";
import { randomInteger } from "../utils.js";

const GENERATE_NUMBER_MIN = 0;
const GENERATE_NUMBER_MAX = 100;
const OPERATIONS = ["+", "-", "*"];

const rules = "What is the result of the expression?";

const calc = (pair, sign) => {
  switch (sign) {
    case "+": {
      return pairs.car(pair) + pairs.cdr(pair);
    }
    case "-": {
      return pairs.car(pair) - pairs.cdr(pair);
    }
    case "*": {
      return pairs.car(pair) * pairs.cdr(pair);
    }
    default: {
      throw new Error("Incorrect operation");
    }
  }
};

const getRound = () => {
  const pair = pairs.cons(
    randomInteger(GENERATE_NUMBER_MIN, GENERATE_NUMBER_MAX),
    randomInteger(GENERATE_NUMBER_MIN, GENERATE_NUMBER_MAX)
  );
  const sign = OPERATIONS[randomInteger(0, OPERATIONS.length - 1)];
  const question = `${pairs.car(pair)} ${sign} ${pairs.cdr(pair)}`;
  const correctAnswer = String(calc(pair, sign));

  return { question, correctAnswer };
};

const gameData = {
  rules,
  getRound,
};

export default gameData;

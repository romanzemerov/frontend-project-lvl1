import pairs from "@hexlet/pairs";
import { randomInteger } from "../utils.js";

const GENERATE_NUMBER_MIN = 0;
const GENERATE_NUMBER_MAX = 100;

const rules = "Find the greatest common divisor of given numbers.";

const gcd = (num1, num2) => {
  const mod = num1 % num2;

  if (mod === 0) {
    return num2;
  }

  return gcd(num2, mod);
};

const getRound = () => {
  const pair = pairs.cons(
    randomInteger(GENERATE_NUMBER_MIN, GENERATE_NUMBER_MAX),
    randomInteger(GENERATE_NUMBER_MIN, GENERATE_NUMBER_MAX)
  );
  const question = `${pairs.car(pair)} ${pairs.cdr(pair)}`;
  const correctAnswer = String(gcd(pairs.car(pair), pairs.cdr(pair)));

  return { question, correctAnswer };
};

const gameData = {
  rules,
  getRound,
};

export default gameData;

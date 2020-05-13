import { getKeyByValue, randomInteger } from "../utils.js";

const GENERATE_NUMBER_MIN = 0;
const GENERATE_NUMBER_MAX = 100;

const answerToBoolean = {
  yes: true,
  no: false,
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getRound = () => {
  const question = randomInteger(GENERATE_NUMBER_MIN, GENERATE_NUMBER_MAX);
  const correctAnswer = getKeyByValue(answerToBoolean, isPrime(question));

  return { question, correctAnswer };
};

const gameData = {
  rules,
  getRound,
};

export default gameData;

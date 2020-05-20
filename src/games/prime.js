import { getKeyByValue, randomInteger } from '../utils.js';

const NUMBER_MIN = 0;
const NUMBER_MAX = 100;

const answerToBoolean = {
  yes: true,
  no: false,
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = randomInteger(NUMBER_MIN, NUMBER_MAX);
  const correctAnswer = getKeyByValue(answerToBoolean, isPrime(question));

  return { question, correctAnswer };
};

const gameData = {
  task,
  getRound,
};

export default gameData;

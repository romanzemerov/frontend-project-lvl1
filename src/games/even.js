import { getKeyByValue, randomInteger } from '../utils.js';

const NUMBER_MIN = 0;
const NUMBER_MAX = 100;

const answerToBoolean = {
  yes: true,
  no: false,
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const question = randomInteger(NUMBER_MIN, NUMBER_MAX);
  const correctAnswer = getKeyByValue(answerToBoolean, isEven(question));

  return { question, correctAnswer };
};

const gameData = {
  rules,
  getRound,
};

export default gameData;

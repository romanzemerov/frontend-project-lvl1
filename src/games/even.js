import { getKeyByValue, randomInteger } from '../utils.js';

const NUMBER_MIN = 0;
const NUMBER_MAX = 100;

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const question = randomInteger(NUMBER_MIN, NUMBER_MAX);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const gameData = {
  task,
  getRound,
};

export default gameData;

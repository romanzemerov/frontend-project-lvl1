import randomInteger from '../utils.js';

const NUMBER_MIN = 0;
const NUMBER_MAX = 100;

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  const mod = firstNumber % secondNumber;

  if (mod === 0) {
    return secondNumber;
  }

  return gcd(secondNumber, mod);
};

const getRound = () => {
  const questionFirstNumber = randomInteger(NUMBER_MIN, NUMBER_MAX);
  const questionSecondNumber = randomInteger(NUMBER_MIN, NUMBER_MAX);

  const question = `${questionFirstNumber} ${questionSecondNumber}`;
  const correctAnswer = String(gcd(questionFirstNumber, questionSecondNumber));

  return { question, correctAnswer };
};

const gameData = {
  task,
  getRound,
};

export default gameData;

import { randomInteger } from '../utils.js';

const GENERATE_NUMBER_MIN = 0;
const GENERATE_NUMBER_MAX = 100;
const PROGRESSION_LENGTH = 10;

const rules = 'What number is missing in the progression?';

const generateProgression = (d, length) => {
  const PROGRESSION_SHIFT_MIN = 0;
  const PROGRESSION_SHIFT_MAX = 10;

  const newProgression = [];
  const shift = randomInteger(PROGRESSION_SHIFT_MIN, PROGRESSION_SHIFT_MAX);

  for (let i = 1; i <= length; i += 1) {
    newProgression.push(i * d + shift);
  }

  return newProgression;
};

const generateProgressionString = (array, hiddenIndex) => {
  return array
    .map((number, i) => (i === hiddenIndex ? '..' : number))
    .join(' ');
};

const getRound = () => {
  const d = randomInteger(GENERATE_NUMBER_MIN, GENERATE_NUMBER_MAX);
  const hiddenNumberIndex = randomInteger(0, PROGRESSION_LENGTH - 1);
  const progression = generateProgression(d, PROGRESSION_LENGTH);
  const question = generateProgressionString(progression, hiddenNumberIndex);
  const correctAnswer = String(progression[hiddenNumberIndex]);

  return { question, correctAnswer };
};

const gameData = {
  rules,
  getRound,
};

export default gameData;

import { randomInteger } from '../utils.js';

const NUMBER_MIN = 0;
const NUMBER_MAX = 100;
const PROGRESSION_LENGTH = 10;

const task = 'What number is missing in the progression?';

const generateProgression = (step, length) => {
  const PROGRESSION_SHIFT_MIN = 0;
  const PROGRESSION_SHIFT_MAX = 10;

  const newProgression = [];
  const shift = randomInteger(PROGRESSION_SHIFT_MIN, PROGRESSION_SHIFT_MAX);

  for (let i = 1; i <= length; i += 1) {
    newProgression.push(i * step + shift);
  }

  return newProgression;
};

const generateProgressionString = (array, hiddenIndex) => {
  return array
    .map((number, i) => (i === hiddenIndex ? '..' : number))
    .join(' ');
};

const getRound = () => {
  const hiddenNumberIndex = randomInteger(0, PROGRESSION_LENGTH - 1);
  const progressionStep = randomInteger(NUMBER_MIN, NUMBER_MAX);
  const progression = generateProgression(progressionStep, PROGRESSION_LENGTH);
  const question = generateProgressionString(progression, hiddenNumberIndex);
  const correctAnswer = String(progression[hiddenNumberIndex]);

  return { question, correctAnswer };
};

const gameData = {
  task,
  getRound,
};

export default gameData;

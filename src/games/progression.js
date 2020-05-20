import randomInteger from '../utils.js';

const NUMBER_MIN = 0;
const NUMBER_MAX = 100;
const PROGRESSION_LENGTH = 10;
const PROGRESSION_SHIFT_MIN = 0;
const PROGRESSION_SHIFT_MAX = 10;

const task = 'What number is missing in the progression?';

const generateProgression = (step, length, shift = 0) => {
  const progression = [];

  for (let i = 1; i <= length; i += 1) {
    progression.push(i * step + shift);
  }

  return progression;
};

const getQuestion = (progression, hiddenIndex) => {
  return progression
    .map((number, i) => (i === hiddenIndex ? '..' : number))
    .join(' ');
};

const getRound = () => {
  const hiddenNumberIndex = randomInteger(0, PROGRESSION_LENGTH - 1);
  const progressionStep = randomInteger(NUMBER_MIN, NUMBER_MAX);
  const shift = randomInteger(PROGRESSION_SHIFT_MIN, PROGRESSION_SHIFT_MAX);
  const progression = generateProgression(
    progressionStep,
    PROGRESSION_LENGTH,
    shift,
  );

  const question = getQuestion(progression, hiddenNumberIndex);
  const correctAnswer = String(progression[hiddenNumberIndex]);

  return { question, correctAnswer };
};

const gameData = {
  task,
  getRound,
};

export default gameData;

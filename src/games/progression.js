import { randomInteger } from "../utils.js";

const PROGRESSION_LENGTH = 10;
let userAnswer;
let correctAnswer;
let progression;
let hiddenNumberIndex;

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

const generateProgressionString = (progressionArray) => {
  return progressionArray
    .map((number, i) => (i === hiddenNumberIndex ? ".." : number))
    .join(" ");
};

const normalizeUserAnswer = (answer) => Number(answer);

const isCorrectAnswer = (answer) => {
  correctAnswer = progression[hiddenNumberIndex];
  return answer === correctAnswer;
};

const getWelcomeMessage = () => {
  return "Welcome to the Brain Games!";
};

const getRules = () => {
  return "Find the greatest common divisor of given numbers.";
};

const generateQuestion = () => {
  const d = randomInteger(0, 100);
  hiddenNumberIndex = randomInteger(0, PROGRESSION_LENGTH - 1);
  progression = generateProgression(d, PROGRESSION_LENGTH);
  return generateProgressionString(progression);
};

const getCorrectAnswer = () => {
  return correctAnswer;
};

const processingUserAnswer = (answer) => {
  userAnswer = normalizeUserAnswer(answer);
  return isCorrectAnswer(userAnswer);
};

const gameData = {
  getWelcomeMessage,
  getRules,
  generateQuestion,
  getCorrectAnswer,
  processingUserAnswer,
};

export default gameData;

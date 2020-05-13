import readlineSync from 'readline-sync';
import gameLoop from './game-loop.js';

const DEFAULT_NAME = 'Anonymous';

const initGame = ({ rules, getRound }) => {
  let name;

  const getCongratulations = () => `Congratulations, ${name}!`;

  const getErrorMessage = (correctAnswer, wrongAnswer) =>
    `${wrongAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`;

  const userInput = readlineSync.question('May I have your name? ');
  name = userInput.length !== 0 ? userInput : DEFAULT_NAME;

  console.log(`Hello, ${name}!`);
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  gameLoop(getRound, getCongratulations, getErrorMessage);
};

export default initGame;

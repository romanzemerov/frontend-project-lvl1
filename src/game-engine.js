import readlineSync from 'readline-sync';

const DEFAULT_NAME = 'Anonymous';
const ROUNDS_COUNT = 3;

const gameEngine = (task, getRound) => {
  const userInput = readlineSync.question('May I have your name? ');
  const name = userInput.length !== 0 ? userInput : DEFAULT_NAME;

  console.log(`Hello, ${name}!`);
  console.log('Welcome to the Brain Games!');
  console.log(task);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = getRound();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`,
      );
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;

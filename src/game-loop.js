import readlineSync from "readline-sync";

const ROUNDS_COUNT = 3;

const gameLoop = (getRound, getCongratulations, getErrorMessage) => {
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const { question, correctAnswer } = getRound();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question("Your answer: ");

    if (answer !== correctAnswer) {
      console.log(getErrorMessage(correctAnswer, answer));
      return;
    }

    console.log("Correct!");
  }

  console.log(getCongratulations());
};

export default gameLoop;

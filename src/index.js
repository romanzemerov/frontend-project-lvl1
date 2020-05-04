import { userIdentification, getUserName } from "./userIdentification.js";
import readlineSync from "readline-sync";

export const initGame = (game) => {
  const CORRECT_ANSWERS_FOR_WIN = 3;

  const state = {
    answer: null,
    isUserWin: false,
    correctAnswersCount: 0,
  };

  const printWelcomeMessage = () => {
    console.log(`${game.getWelcomeMessage()}`);
  };

  const printGameRules = () => {
    console.log(`${game.getRules()}`);
  };

  const printRoundMessage = () => {
    console.log(`Question: ${game.generateQuestion()}`);
  };

  const printCongratulations = () => {
    console.log(`Congratulations, ${getUserName()}!`);
  };

  const printErrorMessage = (correctAnswer, wrongAnswer) => {
    console.log(
      `${wrongAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${getUserName()}!`
    );
  };

  const printSuccessMessage = () => {
    console.log("Correct!");
  };

  const getAnswer = () => {
    state.answer = readlineSync.question("Your answer: ");
  };

  const isGameRunning = () =>
    state.correctAnswersCount < CORRECT_ANSWERS_FOR_WIN;

  userIdentification();
  printWelcomeMessage();
  printGameRules();

  while (isGameRunning()) {
    printRoundMessage();
    getAnswer();

    let isAnswerCorrect = game.processingUserAnswer(state.answer);

    if (!isAnswerCorrect) {
      break;
    }

    printSuccessMessage();
    state.correctAnswersCount += 1;
    state.isUserWin = state.correctAnswersCount === 3;
  }

  if (state.isUserWin) {
    printCongratulations();
  } else {
    printErrorMessage(game.getCorrectAnswer(), state.answer);
  }
};

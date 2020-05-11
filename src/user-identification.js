import readlineSync from "readline-sync";

const DEFAULT_NAME = "Anonymous";
let name;

export const getUserName = () => name;

export const userIdentification = () => {
  const userInput = readlineSync.question("May I have your name? ");
  name = userInput.length !== 0 ? userInput : DEFAULT_NAME;
  console.log(`Hello, ${name}!`);
};

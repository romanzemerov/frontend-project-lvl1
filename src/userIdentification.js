import readlineSync from "readline-sync";

let name = null;

export const getUserName = () => {
  return name;
};

export const userIdentification = () => {
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};

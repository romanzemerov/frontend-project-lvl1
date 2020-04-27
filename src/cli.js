import readlineSync from "readline-sync";

export const userIdentification = () => {
  const name = readlineSync.question("Your answer: ");
  console.log(`Hello, ${name}!`);
};

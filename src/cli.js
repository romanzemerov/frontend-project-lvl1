import readlineSync from "readline-sync";

const userIdentification = () => {
  const name = readlineSync.question("Your answer: ");
  console.log(`Hello, ${name}!`);
};

export default userIdentification;

#!/usr/bin/env node

import {
  userIdentification,
  isUserWin,
  generateQuestion,
  getUserAnswer,
  processingUserAnswer,
  printCongratulations,
} from "../src/cli.js";

console.log(`Welcome to the Brain Games!`);
userIdentification();
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

while (!isUserWin()) {
  generateQuestion();
  getUserAnswer();
  processingUserAnswer();
}

printCongratulations();

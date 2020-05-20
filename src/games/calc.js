import { randomInteger } from '../utils.js';

const OPERAND_MIN = 0;
const OPERAND_MAX = 100;
const OPERATIONS = ['+', '-', '*'];

const task = 'What is the result of the expression?';

const calc = ({ first, second }, sign) => {
  switch (sign) {
    case '+': {
      return first + second;
    }
    case '-': {
      return first - second;
    }
    case '*': {
      return first * second;
    }
    default: {
      throw new Error('Incorrect operation');
    }
  }
};

const getRound = () => {
  const operands = {
    first: randomInteger(OPERAND_MIN, OPERAND_MAX),
    second: randomInteger(OPERAND_MIN, OPERAND_MAX),
  };

  const sign = OPERATIONS[randomInteger(0, OPERATIONS.length - 1)];
  const question = `${operands.first} ${sign} ${operands.second}`;
  const correctAnswer = String(calc(operands, sign));

  return { question, correctAnswer };
};

const gameData = {
  task,
  getRound,
};

export default gameData;

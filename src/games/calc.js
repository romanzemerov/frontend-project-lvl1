import randomInteger from '../utils.js';

const OPERAND_MIN = 0;
const OPERAND_MAX = 100;
const OPERATIONS = ['+', '-', '*'];

const task = 'What is the result of the expression?';

const calc = (first, second, sign) => {
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
  const firstOperand = randomInteger(OPERAND_MIN, OPERAND_MAX);
  const secondOperand = randomInteger(OPERAND_MIN, OPERAND_MAX);
  const sign = OPERATIONS[randomInteger(0, OPERATIONS.length - 1)];

  const question = `${firstOperand} ${sign} ${secondOperand}`;
  const correctAnswer = String(calc(firstOperand, secondOperand, sign));

  return { question, correctAnswer };
};

const gameData = {
  task,
  getRound,
};

export default gameData;

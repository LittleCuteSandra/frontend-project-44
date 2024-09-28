import game from '../index.js';
import getRandomNumber from '../utils/random.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const doOperation = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;
  }
};


const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const randomOperation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
  const correctAnswer = (doOperation(firstNumber, secondNumber, randomOperation)).toString();

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};

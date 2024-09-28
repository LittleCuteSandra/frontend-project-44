import game from '../index.js';
import getRandomNumber from '../utils/random.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
  let nod = 1;
  for (let i = 1; i < Math.min(firstNum, secondNum); i += 1) {
    if ((firstNum % i === 0) && (secondNum % i === 0)) {
      nod = i;
    }
  }
  return nod;
};

const getQuestionAndAnswer = () => {
  const firstRandomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = (getGCD(firstRandomNumber, secondRandomNumber)).toString();
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};

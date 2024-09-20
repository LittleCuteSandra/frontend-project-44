import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const getNOD = (firstNum, secondNum) => {
    let nod = 1;
    for (let i = 1; i < Math.min(firstNum, secondNum); i += 1) {
        if ((firstNum % i === 0) && (secondNum % i === 0)) {
            nod = i;
        }
    }
    return nod;
};

const getQuestionAndAnswer = () => {
    const firstRandomNumber = randomNumber();
    const secondRandomNumber = randomNumber();
    const question = `${firstRandomNumber} ${secondRandomNumber}`;
    const correctAnswer = (getNOD(firstRandomNumber, secondRandomNumber)).toString();
    return [question, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer);
};
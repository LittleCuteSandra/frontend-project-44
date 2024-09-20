import game from '../index.js';

const description = 'What is the result of the expression?';

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const randomOperation = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operations = [
    {
        operation: '+',
        doOperation: (numFirst, numSecond) => numFirst + numSecond,
    },
    {
        operation: '-',
        doOperation: (numFirst, numSecond) => numFirst - numSecond,
    },
    {
        operation: '*',
        doOperation: (numFirst, numSecond) => numFirst * numSecond,
    },
];

const getQuestionAndAnswer = () => {
    const randomFirstNumber = randomNumber();
    const randomSecondNumber = randomNumber();
    const randomOperationObj = operations[randomOperation(0, 2)];
    const question = `${randomFirstNumber} ${randomOperationObj.operation} ${randomSecondNumber}`;
    const correctAnswer = (randomOperationObj.doOperation(randomFirstNumber, randomSecondNumber)).toString();

    return [question, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer);
};
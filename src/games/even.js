import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const getQuestionAndAnswer = () => {
    const question = randomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer);
};
import game from '../index.js';

const description = 'What number is missing in the progression?';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestionAndAnswer = () => {
    const randomProgressionStart = randomNumber(1, 15);
    const randomProgressionStep = randomNumber(1, 10);
    const randomProgressionLength = randomNumber(5, 10);

    const progression = [randomProgressionStart];

    for (let i = 1; i <= randomProgressionLength; i += 1) {
        progression.push(progression[progression.length - 1] + randomProgressionStep);
    }

    const randomMissedPosition = randomNumber(1, randomProgressionLength);
    const correctAnswer = (progression[randomMissedPosition]).toString();
    progression[randomMissedPosition] = '..';

    const question = progression.join(' ');
    return [question, correctAnswer];
};

export default () => {
    game(description, getQuestionAndAnswer);
};
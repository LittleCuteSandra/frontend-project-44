import game from '../index.js';
import getRandomNumber from '../utils/random.js';

const description = 'What number is missing in the progression?';

const getRandomProgressionLine = () => {
  const randomProgressionStart = getRandomNumber(1, 15);
  const randomProgressionStep = getRandomNumber(1, 10);
  const randomProgressionLength = getRandomNumber(5, 10);

  const progression = [randomProgressionStart];

  for (let i = 1; i <= randomProgressionLength; i += 1) {
    progression.push(progression[progression.length - 1] + randomProgressionStep);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLine = getRandomProgressionLine();
  const randomMissedPosition = getRandomNumber(1, progressionLine.length - 1);
  const correctAnswer = (progressionLine[randomMissedPosition]).toString();
  progressionLine[randomMissedPosition] = '..';

  const question = progressionLine.join(' ');
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};

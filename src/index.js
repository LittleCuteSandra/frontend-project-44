import readlineSync from 'readline-sync';

const countRound = 3;

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(description);

  let countIteration = 0;
  for (let i = countIteration; i < countRound; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      countIteration = i;
    } else {
      console.log(`'${answer}' is wrong answer ; (.Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (countIteration === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
};

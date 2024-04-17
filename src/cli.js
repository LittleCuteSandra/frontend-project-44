import readlineSync from '../../readline-sync/lib/readline-sync.js';

export const userName = () => readlineSync.question('Your answer: ');

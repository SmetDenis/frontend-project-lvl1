import toGame from '../engine.js';
import { minValue, maxValue, generateRandomNumber } from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2) === 0);

const getQuestionAnswer = () => {
  const question = generateRandomNumber(minValue, maxValue);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => toGame(task, getQuestionAnswer);

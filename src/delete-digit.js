const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let array = str.split('');
  let strNew = '';
  let minNum = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == minNum) {
      delete array[i];
      break;
    }
  }
  strNew = array.join('')
  return +strNew;
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  let sum;
  if (str.length > 1) {
    sum = 0;
    for(let i = 0; i < str.length; i++) {
      sum = sum + Number(str[i]);
    }
    let str2 = String(sum);
    if (str2.length > 1) {
        sum = 0;
        for(let i = 0; i < str2.length; i++) {
          sum = sum + Number(str2[i]);
        }
    }
  }
 return sum;
}

module.exports = {
  getSumOfDigits
};

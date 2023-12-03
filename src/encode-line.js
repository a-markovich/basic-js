const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let string = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
  count++
  if (str[i] !== str[i + 1]) {
    if (count === 1) {
      count = '';
    }
    string = string + count + str[i];
    count = 0;
  }
}
  return string;
}

module.exports = {
  encodeLine
};

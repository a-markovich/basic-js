const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  arr1.sort();
  arr2.sort();
  let result1 = '';
  let result2 = '';
  let count = 0;
  for (let i = 0; i<arr1.length; i++) {
    count++
    if (arr1[i] !== arr1[i+1]) {
      result1 = result1 + arr1[i] + count;
      count = 0;
    }
   }
  for (let i = 0; i < arr2.length; i++) {
    count++
    if (arr2[i] !== arr2[i+1]) {
      result2 = result2 + arr2[i] + count;
      count = 0;
    }
   }
  let num = 0;
  for (let i = 0; i < result1.length; i = i + 2) {
    for (let j = 0; j < result2.length; j = j + 2) {
      if(result1[i] === result2[j]) {
        if (result1[i+1] < result2[j+1]) {
          num = num + Number(result1[i+1]);
        } else {
          num = num + Number(result2[j+1]);
        }
      } 
    }
  }
  return num;
}

module.exports = {
  getCommonCharacterCount
};

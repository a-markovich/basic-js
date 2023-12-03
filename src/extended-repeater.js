const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|' }) {
  let result = '';
  let preresult = '';
  if (!(options.repeatTimes)) {
    options.repeatTimes = 1;
  }
  if (!(options.separator)) {
    options.separator = '+';
  }
  if (options.addition === undefined) {
    options.addition = '';
  } else {
    toString(options.addition);
  }
  if (!(options.additionRepeatTimes)) {
    options.additionRepeatTimes = 1;
  }
  if (!(options.additionSeparator)) {
    options.additionSeparator = '|';
  }
  for (let j = 1; j <= options.additionRepeatTimes; j++) {
      if (j === options.additionRepeatTimes) {
        preresult = preresult + options.addition;
      } else {
        preresult = preresult + options.addition + options.additionSeparator;
      }
  }
  for (let i = 1; i <= options.repeatTimes; i++) {
    if (i === options.repeatTimes) {
        result = result + str + preresult;
      } else {
        result = result + str + preresult + options.separator;
        }
  }
  return result;
}

module.exports = {
  repeater
};

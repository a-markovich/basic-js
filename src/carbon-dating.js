const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!(sampleActivity) || 
      sampleActivity <= 0 || 
      typeof sampleActivity !== "string" ||
      isNaN(sampleActivity)) {
    return false;
  } else if (parseFloat(sampleActivity) >= 15) {
    return false;
  } else {
  let sampleActivityNumber = parseFloat(sampleActivity);
  let k = Math.log(2) / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/sampleActivityNumber)/k;
  return Math.ceil(t);
  }
}

module.exports = {
  dateSample
};

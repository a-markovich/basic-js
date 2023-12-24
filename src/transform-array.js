const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let str;
  let arrNew;
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  
    for (i = 0; i < arr.length; i++) {
    if (arr[i] === doubleNext) {
      if (i === arr.length-1) {
        arrNew = arr.slice(0, i);
      } else {
        str = arr.slice(0, i) + ',' + arr.slice(i + 1, i + 2) + ',' + arr.slice(i + 1);
        arrNew = str.split(',');
        for (i = 0; i < arrNew.length; i++) {
          arrNew[i] = Number(arrNew[i]);
        }
      }
    }
    if (arr[i] === doublePrev) {
      if (i === 0) {
        arrNew = arr.slice(1);
      } else {
        str = arr.slice(0, i) + ',' + arr.slice(i - 1, i) + ',' + arr.slice(i + 1);
        arrNew = str.split(',');
        for (i = 0; i < arrNew.length; i++) {
          arrNew[i] = Number(arrNew[i]);
        }
      }
    }
    if (arr[i] === discardNext) {
      if (i === arr.length-1) {
        arrNew = arr.slice(0, i);
      } else if (i === 0) {
        arrNew = arr.slice(2);
      } else {
        str = arr.slice(0, i) + ',' + arr.slice(i + 2);
        arrNew = str.split(',');
        for (i = 0; i < arrNew.length; i++) {
          arrNew[i] = Number(arrNew[i]);
        }
      }
    }
    if (arr[i] === discardPrev) {
      if (i === 0) {
        arrNew = arr.slice(1);
      } else if (i === arr.length-1) {
        arrNew = arr.slice(0, arr.length-1);
      } else {
        str = arr.slice(0, i - 1) + ',' + arr.slice(i + 1);
        arrNew = str.split(',');
        for (i = 0; i < arrNew.length; i++) {
          arrNew[i] = Number(arrNew[i]);
        }
      }
    }
      }
  return arrNew; 
}

module.exports = {
  transform
};

import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let newArr = arr.slice();
  let nextArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == '--discard-prev') {
      nextArr.pop();
      nextArr.push(newArr[i]);
    }
    if (newArr[i] == '--discard-next') {
      nextArr.push(newArr[i]);
      newArr[i + 1] = '';
    }
    if (newArr[i] == '--double-prev') {
      nextArr.push(nextArr[nextArr.length - 1]);
      nextArr.push(newArr[i]);
    }
    if (newArr[i] == '--double-next') {
      nextArr.push(newArr[i]);
      nextArr.push(newArr[i + 1]);
    } else nextArr.push(newArr[i]);
  }
  return nextArr.filter(item => {
    if (item != '--discard-prev' && item != '--discard-next' && item != '--double-prev' && item != '--double-next') return item;
  })

  //return result
  // remove line with error and write your code here
}
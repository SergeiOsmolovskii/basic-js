import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let newArr = [];
  arr.forEach(item => newArr.push(parseInt(item)));

  let newSortArr = newArr.filter(item => parseInt(item) != -1)
    .sort((a, b) => a - b);
  for (let i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i] != -1) newArr[i] = newSortArr.pop();
  }
  return newArr;
}
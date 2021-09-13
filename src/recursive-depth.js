import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
/* let arr = ['6575', ['adas', ['dfg', [0]]]];

someArr(arr) */

let someArr = (arr) => arr.some(item => Array.isArray(item));
export default class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    if (someArr(arr)) {
      let newArr = arr.reduce((accum, curent) => {
        return accum.concat(curent);
      }, []);
      return count + this.calculateDepth(newArr);
    }
    return count;
  }
}

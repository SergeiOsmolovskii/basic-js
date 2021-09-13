import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  return arr.reduce((accum, current) => {
    if (typeof(current) === "string") return accum += current.trim()[0];
    else return accum += '';
  }, ' ').toUpperCase().split('').sort().join('').trim();
}

import {
    NotImplementedError
} from '../extensions/index.js';

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
export default function repeater(str, options) {
    let separator = options.separator || '+';
    let repeatTimes = options.repeatTimes || 1;
    let addition = options.addition || '';
    let additionSeparator = options.additionSeparator || '|';
    let additionRepeatTimes = options.additionRepeatTimes || 1;

    if (typeof (options.addition) == "boolean") addition = options.addition.toString();
    if (options.addition === null) addition = "null";
    return (`${str}` + `${addition}${additionSeparator}`.repeat(additionRepeatTimes - 1) + `${addition}` + `${separator}`).repeat(repeatTimes).slice(0, -`${separator.length}`);
}
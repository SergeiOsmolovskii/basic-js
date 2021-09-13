import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(cipheringMachineType) {
    this.cipheringMachineType = cipheringMachineType;
  }
  createChars(word, keyWord) {
    let newKeyWord = keyWord.toUpperCase().slice();
    let newWordWithoutSpaces = '';
    let charCodesArray = [];
    let charKeyWordsCodesArray = [];
    this.cipheringMachineType === false ? newWordWithoutSpaces = word.toUpperCase().slice().replace(/\s/g, '').split('').reverse().join('') : newWordWithoutSpaces = word.toUpperCase().slice().replace(/\s/g, '');

    if (keyWord.length < newWordWithoutSpaces.length) {
      newKeyWord = newKeyWord.repeat(Math.ceil(newWordWithoutSpaces.length / keyWord.length));
      if (newKeyWord.length > newWordWithoutSpaces.length) {
        newKeyWord = newKeyWord.slice(0, newWordWithoutSpaces.length);
      }
    }

    for (let i = 0; i < newWordWithoutSpaces.length; i++) {
      charCodesArray.push(newWordWithoutSpaces.charCodeAt(i));
    }

    for (let i = 0; i < newKeyWord.length; i++) {
      charKeyWordsCodesArray.push(newKeyWord.charCodeAt(i));
    }
    return [charCodesArray, charKeyWordsCodesArray];
  }
  encrypt(word, keyWord) {
    if (!word || !keyWord) {
      throw new Error('Incorrect arguments!');
    }
    let resultWord = [];
    let spaceCounter = 0;
    let chars = this.createChars(word, keyWord);
    let charCodesArray = chars[0];
    let charKeyWordsCodesArray = chars[1];

    for (let i = 0; i < charCodesArray.length; i++) {
      if (word.charCodeAt(i + spaceCounter) === 32) {
        resultWord.push(32);
        spaceCounter++;
      }
      if (charCodesArray[i] > 90 || charCodesArray[i] < 65) resultWord.push(charCodesArray[i]);
      else resultWord.push(65 + (charCodesArray[i] + charKeyWordsCodesArray[i]) % 26);
    }
    return String.fromCharCode(...resultWord);
  }
  decrypt(encryptWord, keyWord) {
    if (!encryptWord || !keyWord) {
      throw new Error('Incorrect arguments!');
    }
    let resultWord = [];
    let spaceCounter = 0;
    let chars = this.createChars(encryptWord, keyWord);
    let charCodesArray = chars[0];
    let charKeyWordsCodesArray = chars[1];

    for (let i = 0; i < charCodesArray.length; i++) {
      if (encryptWord.charCodeAt(i + spaceCounter) === 32) {
        resultWord.push(32);
        spaceCounter++;
      }
      if (charCodesArray[i] > 90 || charCodesArray[i] < 65) resultWord.push(charCodesArray[i]);
      else if ((charCodesArray[i] - charKeyWordsCodesArray[i]) < 0) {
        resultWord.push(65 + (26 + (charCodesArray[i] - charKeyWordsCodesArray[i]) % 26));
      } else resultWord.push(65 + Math.abs((charCodesArray[i] - charKeyWordsCodesArray[i])) % 26);
    }
    return String.fromCharCode(...resultWord);
  }
}
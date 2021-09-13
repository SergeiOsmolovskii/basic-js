import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value === null) this.chainArr.push(`( null )`);
    else this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof (position) != "number") {
      this.chainArr = [];
      throw new Error('You can\'t remove incorrect link!');
    } else this.chainArr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    if (this.getLength() > 1) {
      this.chainArr.reverse();
    }
    return this;
  },
  finishChain() {
    let result = this.chainArr.reduce((accum, current, index) => {
      return (index == 0 || index == this.chainArr.length) ? accum += current : accum += `\~\~${current}`;
    }, '');
    this.chainArr = [];
    return result;
  }
};

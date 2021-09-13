import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let reverseDomains = [];
  let obj = {};

  domains.forEach(item => {
    reverseDomains.push(`.${item.split('.').reverse().join('.')}`);
  });
  for (let i = 0; i < reverseDomains.length; i++) {
    let str = reverseDomains[i];
    while (str.includes('.')) {
      if (obj[str] = obj[str]) obj[str] += 1;
      else obj[str] = 1;
      str = str.slice(0, str.lastIndexOf('.'));
    }
  }
  return obj;
}
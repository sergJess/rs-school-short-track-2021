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
function getDNSStats(dns) {
  if (Array.isArray(dns)) {
    const resultObject = {};
    for (let i = 0; i < dns.length; i++) {
      const split = dns[i].split('.');
      let key = '';
      for (let j = split.length - 1; j >= 0; j--) {
        key += `.${split[j]}`;
        if (resultObject[key]) {
          resultObject[key] += 1;
        } else {
          resultObject[key] = 1;
        }
      }
    }
    return resultObject;
  }
  return false;
}

module.exports = getDNSStats;

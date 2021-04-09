/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac) {
  if (typeof mac === 'string' && mac.length === 17) {
    const template = {
      0: 1,
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
    };
    const splitArray = mac.split('-');
    for (let i = 0; i < splitArray.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(template, splitArray[i][0], splitArray[i][1])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = isMAC48Address;

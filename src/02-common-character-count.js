/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 === 'string' && typeof s2 === 'string') {
    const cash = s2.length;
    let subString = s2;
    for (let i = 0; i < s1.length; i++) {
      subString = subString.replace(s1[i], '');
    }
    return cash - subString.length;
  }
  return false;
}

module.exports = getCommonCharacterCount;

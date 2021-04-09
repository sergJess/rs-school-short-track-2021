/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (typeof str === 'string') {
    let result = '';
    let finalResult = '';
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
      const j = i + 1;
      if (str[i] === str[j]) {
        counter++;
      } else {
        result += counter + str[i];
        counter = 1;
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== '1') {
        finalResult += result[i];
      }
    }
    return finalResult;
  }
  return false;
}

module.exports = encodeLine;

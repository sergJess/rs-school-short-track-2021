/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  if (typeof number === 'number') {
    let num = number;
    while (num >= 10) {
      const str = `${num}`;
      let temp = 0;
      for (let i = 0; i < str.length; i++) {
        temp += (+str[i]);
      }
      num = temp;
    }
    return num;
  }
  return false;
}

module.exports = getSumOfDigits;

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  if (typeof number === 'number') {
    const array = [];
    const str = `${number}`;
    let finalNumber = '';
    for (let i = 0; i < str.length; i++) {
      array.push(+str[i]);
    }
    const minValue = Math.min(...array);
    const index = array.indexOf(minValue);
    for (let i = 0; i < array.length; i++) {
      if (i === index) {
        finalNumber += '';
      } else {
        finalNumber += array[i];
      }
    }
    return +finalNumber;
  }
  return false;
}

module.exports = deleteDigit;

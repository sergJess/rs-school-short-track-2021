/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  if (Array.isArray(matrix)) {
    const zero = 0;
    let sum = 0;
    for (let i = 0, { length } = matrix; i < length; i++) {
      for (let j = 0, subLength = matrix[i].length; j < subLength; j++) {
        if (i === zero) {
          sum += matrix[i][j];
        }
        if (i > zero && !!matrix[i - 1][j]) {
          sum += matrix[i][j];
        }
      }
    }
    return sum;
  }
  return false;
}

module.exports = getMatrixElementsSum;

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Сначала получим массив из значений, отличных от -1
  const sortedValues = arr.filter(value => value !== -1).sort((a, b) => a - b);

  // Затем заполним исходный массив отсортированными значениями
  let sortedIndex = 0;
  return arr.map(value => {
    if (value === -1) {
      // Если текущее значение -1, оставляем его на месте
      return -1;
    } else {
      // Иначе возвращаем очередное отсортированное значение
      const sortedValue = sortedValues[sortedIndex];
      sortedIndex++;
      return sortedValue;
    }
  });
}


module.exports = {
  sortByHeight
};

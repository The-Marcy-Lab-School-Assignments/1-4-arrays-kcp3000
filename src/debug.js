/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.splice(0, arr.length)
  return arr
};
console.log(clearArr([1, 3, 4, 6]))
const getFirstItem = (array) => {
  return array[0];
};
console.log(getFirstItem([1, 2, 3, 4]))

module.exports = {
  clearArr,
  getFirstItem,
};

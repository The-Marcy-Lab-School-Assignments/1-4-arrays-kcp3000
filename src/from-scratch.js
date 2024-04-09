const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
    return arr
  } else {
    arr.push(value)
    return arr
  }
};

const reverseString = (str) => {
  let arr = str.split('').reverse().join('');
  return arr
}

const newArrayFullOf = (value, numOfVal) => {
  let arr = new Array(numOfVal)
  return arr.fill(value)
};

const insertIntoMiddle = (arr, value) => {
  //let middle = arr[Math.floor(arr.length / 2)];
  arr.splice(Math.floor(arr.length / 2), 0, value)
  return arr
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.ceil(arr.length / 2) - 1, 1)
  return arr
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};

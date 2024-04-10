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
  arr.splice(arr.length / 2, 1)
  return arr
};

const isRightIndex = (arr, index, value) => {
  if (arr[value] === index) {
    return true
  } else {
    return false
  };
};

const roundAllNumsDown = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.floor(arr[i]))
  }
  return newArr
}

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = []
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArr.push(arrOfCoords[i][1])
  }
  return newArr //im actually proud of how fast i did this
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

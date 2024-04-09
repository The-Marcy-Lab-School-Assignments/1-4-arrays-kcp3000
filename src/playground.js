// const { clearArr, getFirstItem } = require('./debug');
// const {
//   addToFrontOrBack,

const addToFrontOrBack = (arr, value, isFront) => {
    //let front = true
    //let arr1 = []
    if (isFront === true) {
        arr.unshift(value)
        return arr
    } else {
        arr.push(value)
        return arr
    }
    // arr.push(value)
    // console.log(arr)
};
//console.log(addToFrontOrBack([1, 2, 3, 4], 6, false))

//   reverseString,

const reverseString = (str) => {
    let arr = str.split('').reverse().join('');
    //console.log(arr)
    // let reverse = arr.reverse();
    // console.log(reverse)
    return arr


}
//console.log(reverseString('hello, Hi'))

//   newArrayFullOf,

const newArrayFullOf = (value, numOfVal) => {
    let arr = new Array(numOfVal)
    return arr.fill(value)
}
//console.log(newArrayFullOf(true, 3))

//   insertIntoMiddle,

const insertIntoMiddle = (arr, value) => {
    //let middle = arr[Math.floor(arr.length / 2)];
    arr.splice(Math.floor(arr.length / 2), 0, value)
    return arr
};
//console.log(insertIntoMiddle(['a', 'b', 'c', 'd'], 'z'))
//   deleteFromMiddle,

const deleteFromMiddle = (arr) => {
    arr.splice(Math.ceil(arr.length / 2), 1)
    return arr
};
console.log(deleteFromMiddle(['a', 'v', 'c', 'd']))
console.log(deleteFromMiddle([1, 2, 3]))
console.log(deleteFromMiddle([1, 2, 3, 4, 5]))

//   isRightIndex,
//   roundAllNumsDown,
//   getAllYCoordinates,
// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');

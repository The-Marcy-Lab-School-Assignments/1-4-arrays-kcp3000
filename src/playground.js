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
    arr.splice(arr.length / 2, 1)
    return arr
};
// console.log(deleteFromMiddle(['a', 'b', 'c', 'd']))
// console.log(deleteFromMiddle([1, 2, 3]))
// console.log(deleteFromMiddle([1, 2, 3, 4, 5]))

//   isRightIndex,

const isRightIndex = (arr, index, value) => {
    //let fax = true
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.indexOf(i) === index && arr[i] === value) {
    //         return true
    //     } else {
    //         return false
    //     }
    //     console.log(arr[i])
    // }
    //console.log(arr.indexOf(arr.length))
    if (arr[index] === value) {
        return true
    } else {
        return false
    };
};
console.log(isRightIndex(['a', 'b', 'c', 'd'], 2, 'c'))
//isRightIndex([1])

//   roundAllNumsDown,

const roundAllNumsDown = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(Math.floor(arr[i]))
    }
    return newArr
}
//console.log(roundAllNumsDown([1.1, 1.2, 2.1]))

//   getAllYCoordinates,

const getAllYCoordinates = (arrOfCoords) => {

    let newArr = []
    for (let i = 0; i < arrOfCoords.length; i++) {
        newArr.push(arrOfCoords[i][1])
    }
    return newArr //im actually proud of how fast i did this
};
console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]))
console.log(getAllYCoordinates([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');



let name = "mike";
const changeName = (nameToChange) => {
    nameToChange = "tom";
};
changeName(name);
console.log(name);

const favoriteLocations = ["New York City", "Jersey City"];
const addBostonToFavorites = (locations) => {
    locations.unshift("Boston");
};
addBostonToFavorites(favoriteLocations);
console.log(favoriteLocations);
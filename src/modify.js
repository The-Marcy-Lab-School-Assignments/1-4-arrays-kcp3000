/** FEEDBACK: Great job! In the future, ensure to remove any commented out code! */
const uppercaseAll = (...words) => {
  // return [
  //   word1.toUpperCase(),
  //   word2.toUpperCase(),
  //   word3.toUpperCase(),
  // ];
  let str = [];
  for (const word of words) {
    str.push(word.toUpperCase())
  };
  return str
};
//console.log(uppercaseAll('hello', 'hi', 'goodnnight', 'peace'))

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;


  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
console.log(destructureCoordinates([1, 2]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};

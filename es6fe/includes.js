// Syntax
//
// str.includes(searchString[, position])

const flightNumber = 'z1AC-32-B8DQ';

const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false


console.log("includes('AC')? " + flightNumber.includes('AC'));

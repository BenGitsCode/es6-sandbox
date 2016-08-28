// JS Template Literals
(function(){
    "use strict";


let name = `Ben
This is a new line`;

//multi line strings

let firstName = "Ben";
let lastName = "Adamski";

console.log("My name is " + firstName + " " + lastName);

//Concatenation
console.log(`My name is ${firstName} ${lastName}`);

//much more efficient concatenation with string interpolation.

let Person = {
 firstName: 'Ben',
 lastName: 'Adamski'.
 sayName(){
  return `My name is ${this.firstName} ${this.lastName}`;
 }
};


})();


//syntax issues hear but template strings are great.

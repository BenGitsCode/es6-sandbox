//FAT ARROWS in ES6

//   ES5 example
(function(){
    "use strict";


 // let numbers = [2,3,4,5,6,7]
 //
 // let doubled = numbers.map(function(n) {
 //   return n *2;
 // });

 //=============================
 //  ES6 using Fat Arrows

 let numbers = [2,3,4,5,6,7];

 let doubled = numbers.map((n) => n *2);

 console.log(doubled);

// =====================
// Trickiness

let person ={
 name: 'Ryan',
 sayName: () => {
  console.log(`Hi I am ${this.name}`);
 }
};

// In this example the lexical scope of the arrow function (sort of like the parent scope) would be the last value this was bound to, which can run cause problems using fat arrows.


// sayName: () {
//and
// sayName: function() {
// same thing

let person = {
 name: 'Ryan',
 hobbies: ['Robots', 'Computers', 'Internet'],
 showHobbies: function () {
  this.hobbies.forEach(function(hobby) {

  console.log(`${this.name} likes ${hobby}`);
  }
)};
// The first this refers to Person.hobbies but the second this (this.name) the binding has changed.
// By using a fat arrow instead, this.name's lexical scope changes to the arrow function, making it Person.name

// this.hobbies.forEach => (hobby) {



})();

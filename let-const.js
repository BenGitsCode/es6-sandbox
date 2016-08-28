// LET AND CONST PLAY

(function(){
    "use strict";



 function sayName() {
  var name = "Ben";
 }

 sayName();
 console.log(name);
 //this will log undefined

 //definiing variable name inside function sayName scopes it only to that function. Because of closures,functions inside of that function etc


 //basic block
 //this will log undefined
 if(true) {
 let name = "Ben";
 }

 console.log(name);

// Same thing
//
// {
//  let name = "Ben";
// }
// console.log(name);
 // changing the above let to var, it would log "Ben". With let, it is scoped only to the block.

 for (var i = 0; i < 10; i++) {
  console.log(i);
 }

 console.log('outside for loop', i);

 // this will log

})();

var animals = [
 { name : 'Fluffy', species: 'rabbit' },
 { name: 'Bob', species: 'dog'},
 { name: 'Bo', species: 'hamster'},
 { name: 'Chum', species: 'fish'},
 { name: 'Spot', species: 'dog'}
];


// Higher order functions: Map
// =================================
// Map doesn't just filter things, it transforms them
// create array of names using for loop:

// var name = [];
// for (var i = 0; i < animals.length; i++) {
//  names.push(animals[i].name);
// }

var names = animals.map(function(animal) {
 return animal.name;
});

var names = animals.map((animal) => animal.name);

//using harmony arrow functions Basically 30% less code

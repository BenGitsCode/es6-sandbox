var animals = [
 { name : 'Fluffy', species: 'rabbit' },
 { name: 'Bob', species: 'dog'},
 { name: 'Bo', species: 'hamster'},
 { name: 'Chum', species: 'fish'},
 { name: 'Spot', species: 'dog'}
];

// Filter out dogs using for loop:
// =================================

/*

var dogs = [];
for (var i = 0; i < animals.length; i++) {
 if(animals[i].species === 'dog')
  dogs.push(animals[i]);
}

creates array to store dogs, iterate over animals array and if species is dog, animal will be pushed to dogs

*/

// Filter out dogs using filter function:
// =================================

var dogs = animals.filter(function(animal) {
 return animal.species === 'dog';
});

var dogs = animals.filter(isDog);
var otherAnimals = animals.reject(isDog);
/*

In just two lines, seperates problem simply into
two conditions, is dog or isn't.
Smaller code, one line of logic really, the
return line based on the return condition, using
the animals array. The callback function and filter
are composable, they fit together neatly and more
effeciently than the for loop. */

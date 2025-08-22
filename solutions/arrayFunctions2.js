import { print } from "../settings.js";

// Array Functions 2 (hard)

// create an array with 100 integer elements which are randomly created
// use the Math.random function
print("Array with random values:");
var array = []
for(let i=0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 100);
}
array.forEach(element => print(element + " ", false));
print("");

// use the array from the previous exercise and multiply all values together to one value, but use only the elements that are smaller than 30
// and if one of the elements is equal to zero, don't consider it
print("Reduced Value:");
const reducedValue = array.reduce((accumulator, currentValue) => {
    if(currentValue < 23 && currentValue != 0) {
        accumulator *= currentValue;
    }
    return accumulator;
});
print(reducedValue);

// Find duplicates in the array and put them in a new array
// skills: Array.includes()
print("Duplicates:");
var duplicates = []

for(let value in array) {
    if(duplicates.includes(array[value])) { break; }

    var counter = 0;
    for(let element in array) {
        if(array[element] == array[value]) { counter++; }
    }
    if(counter >= 2) { duplicates.push(array[value]); }
}

print(duplicates);

// Binary Search
// skills: sort
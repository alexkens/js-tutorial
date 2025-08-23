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
print("Binary Search:")
const inputValue = array[Math.floor(Math.random() * array.length)];
print("Input value: " + inputValue);

function binarySearch(inputValue, array) {
    array.sort();
    
    var middle = array.length / 2;
    var start = 0;
    var end = array.length - 1;

    var counter = 0;
    while(counter < array.length) {
        print("counter: " + counter + ", middle: " + middle);

        if(array[middle] == inputValue) {
            return middle;
        }
        if(array[middle] > inputValue) {
            end = middle - 1;
            middle = Math.floor(middle / 2) + start;
        } else if(array[middle] < inputValue) {
            start = middle + 1;
            middle = (end - start) / 2 + 1;
        } else {
            
        }
        
        counter++;
    }
    return "input has not been found";
}

const result = binarySearch(inputValue, array);
print("Sorted Array: " + array.sort());
print("Result index: " + result);








// More sorting algorithms: https://www.geeksforgeeks.org/dsa/sorting-algorithms/
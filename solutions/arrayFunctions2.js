import { print } from "../settings.js";

// Array Functions 2 (hard)

// create an array with 100 integer elements which are randomly created
// use the Math.random function
print("Array with random values:");
var array = [];
for(let i=0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 100);
}
array.forEach(element => print(element + " ", false));
print("");

// use the array from the previous exercise and multiply all values together to one value, but use only the elements that are smaller than 30
// and if one of the elements is equal to zero, don't consider it
print("Reduced Value:");
const reducedValue = array.reduce((accumulator, currentValue) => {
    if(currentValue < 30 && currentValue != 0) {
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
/* 
Implement the search algorithm binary search. We can a value and an array and try to find the value in the array (if it is in there).
Binary search splits a sorted array in half and compares the value with the split value (or middle value). Depending if the value is smaller or greater, we jump to the repsective half and start splitting again. If the splitting/middle value is qual to our input value, we return it.
More infos: https://www.geeksforgeeks.org/dsa/binary-search/
*/

var array2 = []
for(let i=0; i < 20; i++) {
    array2[i] = Math.floor(Math.random() * 100);
}

print("Binary Search:")
const inputValue = array2[Math.floor(Math.random() * array2.length)];
print("Input value: " + inputValue);
array2.sort((x, y) => x - y);
print("Sorted Array: " + array2);

function binarySearch(inputValue, arr) {
    
    var middle = arr.length / 2;
    var start = 0;
    var end = arr.length - 1;

    var counter = 0;
    while(counter < arr.length) {
        print("counter: " + counter + ", middle: " + middle);

        if(arr[middle] == inputValue || start == end) {
            return middle;
        }
        if(arr[middle] > inputValue) {
            end = middle - 1;
            middle = Math.floor(middle / 2) + start;
        } else if(arr[middle] < inputValue) {
            start = middle + 1;
            middle = Math.floor((end - start) / 2) + start;
        } else {}
        counter++;
    }
    return "input has not been found";
}

const resultIndex = binarySearch(inputValue, array2);
print("Result index: " + resultIndex);


// More searching algorithms: https://www.geeksforgeeks.org/dsa/searching-algorithms/
import { print } from "../settings.js";

// Array Functions 2 (hard)

// create an array with 100 integer elements which are randomly created
// use the Math.random function
print("Array with random values:");
var array = [];


// use the array from the previous exercise and multiply all values together to one value, but use only the elements that are smaller than 30
// and if one of the elements is equal to zero, don't consider it
print("Reduced Value:");


// Find duplicates in the array and put them in a new array
// skills: Array.includes()
print("Duplicates:");
var duplicates = []


// Binary Search
/* 
Implement the searching algorithm binary search. We can a value and an array and try to find the value in the array (if it is in there).
Binary search splits a sorted array in half and compares the value with the split value (or middle value). Depending if the value is smaller or greater, we jump to the repsective half and start splitting again. If the splitting/middle value is qual to our input value, we return it.

More infos about binary search: https://www.geeksforgeeks.org/dsa/binary-search/
More about searching algorithms: https://www.geeksforgeeks.org/dsa/searching-algorithms/
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

function binarySearch(inputValue, array2) {

    /* your code */

}

const resultIndex = binarySearch(inputValue, array2);
print("Result index: " + resultIndex);
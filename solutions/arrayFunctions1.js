import { print } from "../settings.js";


// Array Functions 1 (easy)

// forEach, map, reduce, filter
const array = [4, 6, 1, 3, 12, 10]; // use this array

// for loop: it just iterates through the variable (i) till the condition is not fulfilled anymore
// iterate through the list with a foor loop and print out the values
print("Array using for loop:")
for(let i=0; i < array.length; i++) {
    print(i + ": " + array[i]);
}
print("");

// forEach: It is like the for loop, but is more implicit, since the values are used inplace (in the same array)
// iterate through the list with the forEach method and print out the values
print("Array using forEach:")
array.forEach((value, index) => {
    return print(`${index}: ${value}`);
});
print("");

// map: it creates a new array and lets the coder use the values from the original array
// use the map method to multiply each value in the array and put it in a new array
const mapped = array.map((value, index, array) => {
    return value * 2;
});
print("Mapped list with multiplied values: " + mapped);
print("");

// reduce: reduces a array to one single value
// use the reduce method to sum up all the value into one value and assign it to a new variable
const reducedValue = array.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
});
print("reduced value: " + reducedValue);
print("");

// filter:
const result = array.filter((value, index, array) => value > 6);
print("Filtered values: " + result);
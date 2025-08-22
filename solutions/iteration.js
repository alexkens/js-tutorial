import { print } from "../settings.js"

// for loop - task: print out the numbers from 0 to 10 (included) in a line
print("for loop from 0 to 10:");
for(let i=0; i < 11; i++) {
    // print(i);
}

// use a while loop to iterate from 0 to 10
print("while loop from 0 to 10:");
var i = 0; 
while(i < 11) {
    // print(i)
    i++;
}

// use a for loop to iterate backwards from 100 to 0, but only the odd numbers
print("for loop backwards and odd from 100 to 0:");
var i=100;
for(let i=44; i >= 0; i--) {
    if(i % 2 == 1) {
        // print(i);
    }
}

// calculate and print out the fibonacci sequence to 20 digits
print("Fibonacci:");
const fibonacciSequence = [];
for(let i=0; i < 20; i++) {
    var tmp;
    if(i == 0 || i == 1) {
        tmp = 1;
    } else {
        tmp = fibonacciSequence[i-1] + fibonacciSequence[i-2];
    }
    fibonacciSequence.push(tmp);
}
print("fibonacci sequence: " + fibonacciSequence);
print(fibonacciSequence.toString() == new Array([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]).toString());

// calculate prim numbers to 30 digits
print("Prime numbers:");
var primeArray = [];
var i = 1;
while(primeArray.length < 30) {
    var primeBool = true;
    for(let j=2; j < i; j++) {
        if(i % j == 0) { primeBool = false; }
    }
    if(primeBool) {
        primeArray.push(i);
    }

    i++;
}

print("Prime Array: " + primeArray);
print(primeArray.toString() == [1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109].toString());
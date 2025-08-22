import { print } from "../settings.js";

// Array Functions 2 (hard)

var array = []
for(let i=0; i < 100; i++) {
    array[i] = Math.floor(Math.random() * 100);
}
array.forEach(element => print(element + " ", false));
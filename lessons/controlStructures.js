import { print } from "../settings.js";

// loops
// for
const n = 10;
for(let i=0; i < n; i++) {
    console.log(i);
}

// while
var i = 0;
while(i < n) {
    i++;
}

// if
let ifMsg = ""
if(3 == 3) {
    ifMsg = "good if job";
}

// if else
if(3 != 3) {
    ifMsg = "good if job";
} else {
    ifMsg = "good else job";
}

// if elif else
if(3 != 3) {
    ifMsg = "good if job";
} else if (33 > 3) {
    ifMsg = "good else if job"
} else {
    ifMsg = "good else job";
}
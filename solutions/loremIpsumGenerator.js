import { print } from "../settings.js";

// Create your own Lorem Ipsum Generator
// It is the final and most demanding tasks here, since it is a logical but also creative challenge. It can be solved in many ways.

// skills: string methods, Math.random, parseInt

function loremIpsumGenerator(stringInput, type) {

    const intInput = parseInt(stringInput);

    if(type == "words") {

    } else if(type == "characters") {
        

        Array.join(" ")

    } else {
        return "Please enter for the type-parameter either 'words' or 'characters";
    }
}


var outputString = "nothing";
outputString = loremIpsumGenerator("10", "");
print(outputString);

var a = ["sasd", "tttt", "yyy"];
a = a.join(" ");
print(a);
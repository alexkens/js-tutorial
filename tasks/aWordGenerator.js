import { print } from "../settings.js";

// Create your A word generator
/* It is a function that generates any paragraph that consists of words that just use the character 'a'.
So our output should look like this (depending on the input): 

"aa aaaaaa a aaaaa aaa aaa". -> its input was "25" and "characters"
"aa aaa" -> its input was "6" and "characters"
"" -> its input was "0" and "characters"

"aa aaaaaa a aaaaa aaa aaa". -> its input was "6" and "words"
"aa aaa" -> its input was "2" and "words"
"" -> its input was "0" and "words"

- it should have an input string for the length of the paragraph
- another parameter/s should define if the intput length is supposed to be for words or characters
- the function should return a string paragraph
- the way you choose the length of single words is left to you
*/
// skills: string methods, Math.random, parseInt

function aWordGenerator(stringInput, type="characters") {

    /* your code */

}


print(aWordGenerator("10", "words"));
print(aWordGenerator("20", "words"));
print(aWordGenerator("10", "characters"));
print(aWordGenerator("20", "characters"));
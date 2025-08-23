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

    const intInput = parseInt(stringInput);
    const maxWord = 8;
    var output = "";

    if(type == "words") {

        for(let i=0; i < intInput; i++) {
            const newWordLen = Math.random() * maxWord;
            for(let i=0; i < newWordLen; i++) { output += "a"; }
            if(i != intInput - 1) {
                output += " ";
            }
        }
        return output;

    } else if(type == "characters") {

        if(intInput <= 4) {
            for(let i=0; i < intInput; i++) { output += "a"; }
            return output;
        }

        const averageWord = 4;
        
        const spaces = Math.floor(intInput / averageWord);
        const wordSpace = intInput - spaces;

        var count = 0;
        var totalWordLen = 0;
        
        while(count < wordSpace) {
            let newWordLen = Math.random() * maxWord;
            if(totalWordLen + newWordLen < wordSpace) {
                totalWordLen += newWordLen;
                for(let i=0; i < newWordLen; i++) { output += "a"; }
                output += " ";
            } else if(totalWordLen + newWordLen == wordSpace) {
                return output;
            } else { // totalWordLen + newWordLen > wordSpace
                const rest = wordSpace - totalWordLen - spaces ;
                for(let i=0; i < rest; i++) { output += "a"; }
                return output;
            }
            count++;
        }
    } else {
        return "Please enter for the type-parameter either 'words' or 'characters";
    }
}


print(aWordGenerator("0", "words"));
print(aWordGenerator("20", "words"));
print(aWordGenerator("0", "characters"));
print(aWordGenerator("20", "characters"));
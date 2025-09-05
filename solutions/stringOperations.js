import { print } from "../settings.js";

/*
pangram: a sentence that uses every letter of the alphabet
perfect pangram: an pangram where every letter is only used once

-write a function that recognizes strings as either a pangram or a perfect pangram
-use the pangrams here to test your function
*/

const pangrams = [
    "The quick brown fox jumps over the lazy dog",
    "Quick nymph bugs vex fjord waltz.",
    "Waltz, bad nymph, for quick jigs vex.",
    "Pack my box with five dozen liquor jugs.",
    "Blowzy night-frumps vex'd Jack Q.",    // perfect pangram
    "When zombies arrive, quickly fax Judge Pat.",
    "Amazingly, few discotheques provide jukeboxes.",
    "Mr. Jock, TV quiz PhD, bags few lynx.",   // perfect pangram
    "The five boxing wizards jump quickly.",
];
const noPangrams = [
    "No matter what I say or do, I still don't have a clue.",
    "And when everything is said and done, I'm gonna run.",
    "This machine has been time tested!",
    "No pangram will break me.",
]

function pangramCheck(sentence) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letters = "";
    let counter = 0;
    sentence = sentence.toLowerCase();

    for(let index in sentence) {
        let letter = sentence[index];
        // print(index + ": " + letter);
        
        if(alphabet.includes(letter)) {
            if(!letters.includes(letter)) {
                letters += letter;
            }
            counter += 1;
        }
    }

    // print(`${letters}, ${letters.length}, ${counter}`);

    if(letters.length == 26 && counter == 26) {
        print("Perfect Pangram");
    } else if(letters.length == 26) {
        print("Pangram");
    } else {
        print("No Pangram");
    }

}

for(let p in pangrams) {
    pangramCheck(pangrams[p]);
}

for(let p in noPangrams) {
    pangramCheck(noPangrams[p]);
}

/*
palindrome: word that is forward and backwards the same

-program a palindrome checker


*/
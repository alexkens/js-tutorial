import { print } from "../settings.js";

// Create your own Lorem Ipsum Generator
/*
Parameters: stringInput, type=["characters", "words"], language=["latin", "german"]
Output: string of lorem Ipsum -> "Lorem Ipsum ..."
*/
// skills: parseInt

const loremDE = "Damit Ihr indess erkennt, woher dieser ganze Irrthum gekommen ist, und weshalb man die Lust anklagt und den Schmerz lobet, so will ich Euch Alles eröffnen und auseinander setzen, was jener Begründer der Wahrheit und gleichsam Baumeister des glücklichen Lebens selbst darüber gesagt hat. Niemand, sagt er, verschmähe, oder hasse, oder fliehe die Lust als solche, sondern weil grosse Schmerzen ihr folgen, wenn man nicht mit Vernunft ihr nachzugehen verstehe. Ebenso werde der Schmerz als solcher von Niemand geliebt, gesucht und verlangt, sondern weil mitunter solche Zeiten eintreten, dass man mittelst Arbeiten und Schmerzen eine grosse Lust sich zu verschaften suchen müsse. Um hier gleich bei dem Einfachsten stehen zu bleiben, so würde Niemand von uns anstrengende körperliche Übungen vornehmen, wenn er nicht einen Vortheil davon erwartete. Wer dürfte aber wohl Den tadeln, der nach einer Lust verlangt, welcher keine Unannehmlichkeit folgt, oder der einem Schmerze ausweicht, aus dem keine Lust hervorgeht?Dagegen tadelt und hasst man mit Recht Den, welcher sich durch die Lockungen einer gegenwärtigen Lust erweichen und verführen lässt, ohne in seiner blinden Begierde zu sehen, welche Schmerzen und Unannehmlichkeiten seiner deshalb warten. Gleiche Schuld treffe Die, welche aus geistiger Schwäche, d.h. um der Arbeit und dem Schmerze zu entgehen, ihre Pflichten verabsäumen. Man kann hier leicht und schnell den richtigen Unterschied treffen; zu einer ruhigen Zeit, wo die Wahl der Entscheidung völlig frei ist und nichts hindert, das zu thun, was den Meisten gefällt, hat man jede Lust zu erfassen und jeden Schmerz abzuhalten; aber zu Zeiten trifft es sich in Folge von schuldigen Pflichten oder von sachlicher Noth, dass man die Lust zurückweisen und Beschwerden nicht von sich weisen darf. Deshalb trifft der Weise dann eine Auswahl, damit er durch Zurückweisung einer Lust dafür eine grössere erlange oder durch Übernahme gewisser Schmerzen sich grössere erspare.";

const loremLATIN = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";


function loremIpsumGenerator(stringInput, type="characters", language="latin") {

    const intInput = parseInt(stringInput);
    var file;
    var output = "";

    if(language == "latin") {
        file = loremLATIN;
    } else if(language == "german") {
        file = loremDE;
    } else {
        return "Please use for the language parameter the values ['latin', 'german']";
    }

    if(type == "characters") {

        if(intInput > file.length) {

        } else {
            output = file.slice(0, intInput);
        }
    } else if(type == "words") {

        // transform the file into an array
        const split = file.split(" ");
        const output = [];
        for(let i=0; i < intInput; i++) {
            if(split[i] != "") {
                output.push(split[i]);
            }
        }
        return output.join(" ");
    } else {
        return "Please use for the type parameter the values ['characters', 'words']";
    }

    return output;
}


var outputString = loremIpsumGenerator("10", "words", "latin");
print(outputString);
outputString = loremIpsumGenerator("12", "words", "german");
print(outputString);
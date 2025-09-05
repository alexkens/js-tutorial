import { print } from "../settings.js";

// functions, arrow functions, parameter, return

// normal function
function functionName(parameter1, parameter2) {
    return parameter1 + parameter2 + 10;
}

// a function can be assigned to a variable
let myFunction = functionName;
print(myFunction(4, 5));

// function expression
let functionCreatedByAnExpression = function() {
    print("What a beautiful function. Thank you for existing in your browser.")
}
functionCreatedByAnExpression();

// arrow function
let result = (parameter) => parameter + 10;
print(result(12));

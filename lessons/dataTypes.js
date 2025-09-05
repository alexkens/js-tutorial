import { print } from "../settings.js";

/* Data Types

- Javascript has dynamic type checking, so instead of specifying the type of a variable, its is assumed by the language at runtime
- all types except object are immutable
- immutable: that means its value cannot be changed
/ mutable: 
*/

// typeof: operator that tells the respective datatype
let aNumber = 3;
const numberType = typeof(aNumber); // "number", respresented as a string
const stringType = typeof(numberType); // "string", respresented as a string again


// most important types (for us): number, boolean, string

// number: it can be an integer but also a decimal number
let x = 3;
x = -4;
x = 9.5;

// boolean
let boolTrue = true;
let boolFalse = false;

// string
let s = "hello world";
let letter = s[4]; // "o"

// special type: object --> it can have properties (which can be any data type) and methods (functions that belong to an object)
const person = new Object();
const product =  {name: "Laptop", price: 499, color: "white"}; // dot notation

/* variable types: const, var, let
- const: not re-assignable
- var: re-assignable, function-scoped or globally-scoped variables
- let:re-assignable, block-scoped local
*/

/* null, undefined

null: 
- has exactly one value (null)
- represents the absence of any object
- variable points to no object

undefined:
- has exactly one valie (undefined)
- represents the absence of a value
- is a global identifier
*/

let nullValue = null;
let undefinedValue = undefined;
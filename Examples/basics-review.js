// Step 1: Variables - Data Types (What are they and how to use them)

// Undefined (empty jar)
var myVariable; // datatype: undefined
// Number (put a number in)
var myVariable = 2; // datatype: number
// String (put words in)
var myVariable = "2"; // datatype: String
// Adding: Number + String = String
var result = "A string" + 2 + 3; // "A string23" (starts with string, so everything becomes string)
// Order matters (left to right)
var result = 2 + 3 + "A string"; // "5A string" (numbers add first, then string)

// Step 2: Variables - Scope (Where the jar is visible)

// Global (avoid if possible)
global = "Visible everywhere"; // Not advisable
// Function scope with var
function myFunction() {
  if (true) {
    var tmp = 123;
  }
  console.log(tmp); // 123 (visible in whole function)
}
// Block scope with let/const
function myFunction() {
  if (true) {
    let tmp = 123;
  }
  console.log(tmp); // Error: tmp undefined (only in if block)
}
// Const cannot change
const bar = 123;
bar = 456; // Error: read-only

// Step 3: Functions (Reusable code blocks)

// Define function
function myFunction() {
  // code here, e.g. alert("Hello!");
}
// Call it
myFunction();

// Step 4: Arrays (Lists of things)

var myArray = [
  "item1",
  "item2",
  "item3"
];
// Access first item: myArray[0] = "item1"


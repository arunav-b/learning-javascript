// 1. let and const
const color = "red";
console.log(color);
let var1 = "sample";
let var2 = "sample";

// 2. Equality Operator
if (var1 === var2) console.log("Equal value");
else console.log("Unequal value");

let int1 = 23;
let int2 = 94;
// 3. Relational Operator
if (int1 > int2) console.log("int1 is greater than int2");
else console.log("int2 is greater than int1");

// 4. Arithmetic Operator
console.log("Sum = ", int1 + int2);

let role = "admin";
// 5. Switch statement
switch (role) {
  case "user":
    console.log("User");
    break;
  case "admin":
    console.log("Admin");
    break;
  default:
    console.log("Default");
    break;
}

// 6. Loop
for (let i = 0; i < 5; i++) console.log(i);

// 7. Defining an Object
let person = {
  name: "Arunav",
  age: 25,
  height: 6.3,
};
console.log(person);

// 8. Access object elements
// Access elements in object using Dot notation
console.log(person.name);
console.log(person.age);
console.log(person.height);
// Access using bracket notation
let selection = "age";
console.log(person[selection]);

// 9. Arrays
let colors = ["red", "blue"];
colors[2] = "green";
console.log(colors);
// For-in loop to access elements in an object
for (let key in person) console.log(key, person[key]);
// For-of to iterate over an array or iterable
for (let color of colors) console.log(color);

// 10. Functions
function greet(name, age) {
  console.log("Hello " + name + ". Your age is " + age + ".");
}
greet("Arunav", 25);

// Falsy values
// ''
// NaN
// null
// undefined
// false
// 0

// 11. this keyword
// https://www.digitalocean.com/community/conceptual_articles/understanding-this-bind-call-and-apply-in-javascript
// There are four main contexts in which the value of this can be implicitly inferred:
// a. the global context: When referred within a simple function this still refers to the global object
// b. as an object method: A method uses this to refer to the properties of the object
// c. as a function/class constructor: When used inside a function/class constructor or class, this refers to the instance of the class/Function constructor
// d. as a DOM event handler: In an event handler called by addEventListener, this will refer to event.currentTarget

// 12. Difference Between var, let, and const
// Keyword	Scope	        Hoisting	Can Be Reassigned	Can Be Redeclared
// var	    Function scope	Yes	        Yes	                Yes
// let	    Block scope	    No	        Yes	                No
// const	Block scope	    No	        No	                No

// 13. Hoisting
// A behavior of JavaScript in which variable declaration and function declaration are moved to the top of their scope.

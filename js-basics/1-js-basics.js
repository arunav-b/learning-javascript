// let and const
const color = 'red';
console.log(color);
let var1 = 'sample';
let var2 = 'sample';

// Equality Operator
if (var1 === var2)
    console.log('Equal value');
else
    console.log('Unequal value');

let int1 = 23;
let int2 = 94;
//Relational Operator
if (int1 > int2)
    console.log('int1 is greater than int2');
else
    console.log('int2 is greater than int1');

// Arithmetic Operator
let result = int1 + int2;
console.log("Sum = " + (int1 + int2));

let role = 'admin';
// Switch statement
switch (role) {
    case 'user':
        console.log('User');
        break;

    case 'admin':
        console.log('Admin');
        break;

    default:
        console.log('Default');
        break;
}

// Loop
for (let i = 0; i < 5; i++)
    console.log(i);

// Object
let person = {
    name: 'Arunav',
    age: 25,
    height: 6.3
};
console.log(person);

// Access object elements
// Access elements in object using Dot notation
console.log(person.name);
console.log(person.age);
console.log(person.height);
// Access using bracket notation
let selection = 'age';
console.log(person[selection]);

// Arrays
let colors = ['red', 'blue'];
colors[2] = 'green';
console.log(colors);

// For-in loop to access elements in an object
for (let key in person)
    console.log(key, person[key]);
// For-of to iterate over an array or iterable
for (let color of colors)
    console.log(color);    

// Functions
function greet(name, age) {
    console.log('Hello ' + name + '. Your age is ' + age + '.');
}
greet('Arunav', 25);

// Falsy values
// ''
// NaN
// null
// undefined
// false
// 0

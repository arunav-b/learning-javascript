// Factory functions
// Use camelcase notation
function createCircle(radius) {
    return {
        radius,
            draw() {
            console.log("Circle is of radius " + radius);
        }
    };
}
let circle1Obj = createCircle(2);
let circle2Obj = createCircle(4);
circle1Obj.draw();
circle2Obj.draw();

//Constructor Functions
// Norm is to use Pascalcase notation
function CreateCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Creating circle with radius ' + radius);
    }
}
const circle = new CreateCircle(6);

// Adding properties to a circle after creating it
circle.color = 'red'; 
circle.draw();
console.log(circle);

// Enumerating in objects
// Using for-in
for (let item in circle1Obj)
    console.log(item);
// Using for-of enumerating on keys of object
for (let key of Object.keys(circle1Obj))
    console.log(key);
// Using for-of enumerating on key-value pairs of object    
for (let entry of Object.entries(circle1Obj))
    console.log(entry);    
// `in` operator - Check if a property exists in an object
if('color' in circle)
    console.log('Property present')
else
    console.log('Property not present')

// Object cloning
// Type-1 - using for-in loop
const another1 = {};
for (let key in circle)
    another1[key] = circle[key];
console.log(another1);
// Type-2 - using Object, can add additional properties to the object while copying
const another2 = Object.assign({
    color: 'orange'
}, circle1Obj);
console.log(another2);
// Type-3 - Using the spread operator
const another3 = {...circle2Obj};
console.log(another3);


// Built-in objects in JS 
// Math
console.log(Math.random());
// String
console.log("hello".toUpperCase());
// Template Literal
const message = 
`Hey there !

I got a circle object of radius ${another3.radius}. Do you need it ?

Regards,
Arunav`;
console.log(message);
// Date
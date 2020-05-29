// 1. Factory functions
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

// 2. Constructor Functions
//Norm is to use PascalCase notation
function CreateCircle(radius){
    console.log(this);
    this.radius = radius,
    this.draw = function(){
        console.log('Creating circle with radius =', this.radius);
    }
}

// 3 call(), apply() & bind()
// Call a function by passing in an object {} and all the parameters the function accepts
CreateCircle.call({}, 2123);
// Call a function by passing in an object {} and all the parameters as an array
CreateCircle.apply({}, [102, 232, 432]); // the extra values passed in array will be ignored
// Binds the function to the object passed inside bind()
const bindCreateCircle = CreateCircle.bind({radius: 45}); 
bindCreateCircle();

// 4. Adding properties to a circle after creating it
const circle = new CreateCircle(6);
circle.color = 'red'; 
circle.draw();
console.log(circle);

// 5. Enumerating in objects
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

// 6. Object cloning
// Using for-in loop
const another1 = {};
for (let key in circle)
    another1[key] = circle[key];
console.log(another1);
// Using Object, can add additional properties to the object while copying
const another2 = Object.assign({
    color: 'orange'
}, circle1Obj);
console.log(another2);
// Using the spread operator
const another3 = {...circle2Obj};
console.log(another3);

// 7. Built-in objects in JS 
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
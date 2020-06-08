// 1. Factory functions
// Norm is to use camelcase notation
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Circle is of radius " + radius);
    },
  };
}
let circle1Obj = createCircle(2);
let circle2Obj = createCircle(4);
circle1Obj.draw();
circle2Obj.draw();

// 2. Constructor Functions
//Norm is to use PascalCase notation
function CreateCircle(radius) {
  console.log(this);
  (this.radius = radius),
    (this.draw = function () {
      console.log("Creating circle with radius =", this.radius);
    });
}

// 3. call(), apply() & bind()
// For both call() & apply(), the object passed as an argument becomes the context of `this` inside the called function
// call() : invoke a function with a specified `this` context and optional arguments passed as varargs
// apply() : invoke a function with a specified `this` context and optional arguments passed as array
// bind() : In order to use a function (fn()) in the context of another object (obj), bind() method is used. The resultant object can be set to a const and can be used multiple times as a separate object (fn() + obj) throughout the lifetime of the application
//
// Call a function by passing in an object {} and all the parameters the function accepts
CreateCircle.call({}, 2123);
// Call a function by passing in an object {} and all the parameters as an array
CreateCircle.apply({}, [102, 232, 432]); // the extra values passed in array will be ignored
// Binds the function to the object passed inside bind()
const bindCreateCircle = CreateCircle.bind({ radius: 45 });
bindCreateCircle();

// 4. Adding properties to a circle after creating it
const circle = new CreateCircle(6);
circle.color = "red";
circle.draw();
console.log(circle);

// 5. Enumerating in objects
// Using for-in
for (let item in circle1Obj) console.log(item);
// Using for-of enumerating on keys of object
for (let key of Object.keys(circle1Obj)) console.log(key);
// Using for-of enumerating on key-value pairs of object
for (let entry of Object.entries(circle1Obj)) console.log(entry);
// `in` operator - Check if a property exists in an object
if ("color" in circle) console.log("Property present");
else console.log("Property not present");

// 6. Object cloning
// Using for-in loop
const another1 = {};
for (let key in circle) another1[key] = circle[key];
console.log(another1);
// Using Object.assign(), can add additional properties to the object while copying
const another2 = Object.assign(
  {
    color: "orange",
  },
  circle1Obj
);
console.log(another2);

// 7. Spread Operator
// Creates a shallow copy, and nested objects will be passed by reference.
const another3 = { ...circle2Obj };
console.log(another3);
// While updating objects via spread, any nested object will have to be spread as well.
const user = {
  id: 3,
  name: "Ron",
  organization: {
    name: "Parks & Recreation",
    city: "Pawnee",
  },
};

const updatedUser = {
  ...user,
  organization: {
    ...user.organization,
    position: "Director",
  },
};

console.log(updatedUser);

// 8. Built-in objects in JS
// Math
console.log(Math.random());
// String
console.log("hello".toUpperCase());
// Template Literal
const message = `Hey there !

I got a circle object of radius ${another3.radius}. Do you need it ?

Regards,
Arunav`;
console.log(message);

// 9. Object & Array Destructuring
const note = {
  title: "My first note",
  author: {
    firstName: "Sherlock",
    lastName: "Holmes",
  },
  tags: ["personal", "writing", "investigations"],
};
const {
  title,
  date = new Date(),
  author,
  author: { firstName },
  tags: [personalTag, writingTag],
} = note;

console.log(
  `Title: ${title}, \nDate: ${date}, \nAuthor: ${author}, \nFirstName: ${author.firstName}, \nPersonal Tag: ${personalTag}`
);

// 10. Different Object functions in JS
//  Check out - https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
// - Object.create() - used to create a new object and link it to the prototype of an existing object.
// - Object.keys() - creates an array containing the keys of an object.
// - Object.values() - creates an array containing the values of an object.
// - Object.entries() - creates a nested array of the key/value pairs of an object.
// - Object.assign() - used to copy values from one object to another. Also two objects can be merged with Object.assign().
// - Object.freeze() - prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
// - Object.seal() - prevents new properties from being added to an object, but allows the modification of existing properties.
// - Object.getPrototypeOf() - used to get the internal hidden Prototype of an object

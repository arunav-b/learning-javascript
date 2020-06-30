# Learning JavaScript

> **_In Progress_**
>
> This document has been seggregated as following -
>
> 1. JavaScript Essentials
> 2. ES6 & Beyond
> 3. OO JavaScript
> 4. Advanced Topics

<br/>
<br/>

# 1. JavaScript Essentials

<br/>

## Use === instead of ==

- === checks for the value and data type of the variable being compared whereas == checks for only the value and not the data type
- JavaScript doesn't care if there is ';' at the end of a statement. Whenever there is a line break it quitely assumes to have a ';' at the end of the line. We need to be careful with this especially in multi-line `return` statements.

<br/>

## Hoisting & `Prototype`

- A behavior of JavaScript in which variable declaration and function declaration are moved to the top of their scope.
- Every JavaScript object has an internal property called `Prototype` which is nothing but a reference pointing to another object, which again contains some properties including `Prototype`.

<br/>

## Objects in JS

- Objects in JavaScript is represented with a {}.
- Object has properties and methods.
- We can add properties and methods to JavaScript objects after they are created.
- We can also delete propeties of objects.
- Properties inside an object can be accessed using the dot(.) or the bracket([]) notation.
  ```
  const car = {
      year : 2010,
      make: 'BMW',
      drive : function(){
          console.log('Driving...');
      }
  }
  console.log(car);
  console.log(car.year);
  console.log(car['make']);
  car.color = 'black';
  console.log(car);
  delete car.make;
  console.log(car);
  ```

<br/>

## `Object` methods in JS

- `Object.create()` - used to create a new object and link it to the prototype of an existing object.
- `Object.keys()` - returns an array containing the keys of an object.
- `Object.values()` - returns an array containing the values of an object.
- `Object.entries()` - returns a nested array of the key/value pairs of an object.
- `Object.assign()` - used to copy values from one object to another. Also two objects can be merged with it.
- `Object.freeze()` - prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
- `Object.seal()` - prevents new properties from being added to an object, but allows the modification of existing properties.
- `Object.getPrototypeOf()` - used to get the internal hidden Prototype of an object.

  [Additional Reference](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)

<br/>

## `call(), apply()` & `bind()`

- `call()` : Invoke a function with a specified `this` context and optional arguments passed as varargs
- `apply()` : Invoke a function with a specified `this` context and optional arguments passed as array
- `bind()` : In order to use a function (fn()) in the context of another object (obj), bind() method is used. The resultant object can be set to a const and can be used multiple times as a separate object (fn() + obj) throughout the lifetime of the application

  ```
  function CreateCircle(radius, color) {
    (this.radius = radius),
    (this.draw = function () {
        console.log(`Creating circle with radius ${this.radius} and color ${this.color}`);
  });
  }

  CreateCircle.call({}, 7, 'red');  // Passing in an object {} and rest all as parameters as discrete values

  CreateCircle.apply({}, [4, 'black']); // Passing in an object {} and rest all parameters as array

  const bindCreateCircle = CreateCircle.bind({ radius: 45 }); // Binds the function to the object passed inside bind()
  bindCreateCircle();
  ```

  [Additional Reference](https://www.taniarascia.com/this-bind-call-apply-javascript/)

  > **Note:**
  >
  > - For both `call()` & `apply()`, the object passed as an argument becomes the context of `this` inside the called function
  > - Both `call()` & `apply()` are one-time use methods. If we call with `this` context it will have it, but the original function will remain unchanged.

<br/>

## `this` keyword

- There are four main contexts in which the value of `this` can be implicitly inferred:

  1. **the global context**: When referred within a simple function `this` still refers to the global object.
  2. **as an object method**: A method uses `this` to refer to the properties of the object.
  3. **as a function/class constructor**: When used inside a function/class constructor or class, `this` refers to the current instance of the class/Function constructor.
  4. **as a DOM event handler**: In an event handler called by addEventListener, this will refer to event.currentTarget.

  [Additional Reference](https://www.taniarascia.com/this-bind-call-apply-javascript/)

<br/>

## JS & DOM

- [JS, Browser & DOM](https://www.kirupa.com/html5/javascript_the_browser_and_the_dom.htm)
- [Query Selector](https://www.kirupa.com/html5/finding_elements_dom_using_querySelector.htm)
- [Modifying DOM](https://www.kirupa.com/html5/modifying_dom_elements.htm)
- [Traversing DOM](https://www.kirupa.com/html5/traversing_the_dom.htm)
- [Creating, Removing & Cloning DOM elements](https://www.kirupa.com/html5/creating_dom_elements_and_other_stuff.htm)

<br/>

## Event Handling

- [Events in JS](https://www.kirupa.com/html5/javascript_events.htm)
- [Event Capturing and Bubbling](https://www.kirupa.com/html5/event_capturing_bubbling_javascript.htm)
- [Mouse Events](https://www.kirupa.com/html5/mouse_events_in_javascript.htm)
- [Handling Events for Many Elements](https://www.kirupa.com/html5/handling_events_for_many_elements.htm)
- [Keyboard Events](https://www.kirupa.com/html5/keyboard_events_in_javascript.htm)
- [Custom Events](https://www.kirupa.com/html5/custom_events_js.htm)

<br/>
<br/>

# 2. ES6 & Beyond

<br/>

## Difference between `var`, `let`, and `const`

- Whenever possible use `const`. Varibles defined as `const` is immutable. `const` protects the reference but does not protect the properties inside an object.
- `let` is mutable. Always prefer using `const` over 'let` whenever possible.
- Always avoid using `var`

  | Keyword | Scope          | Hoisting | Can Be Reassigned | Can Be Redeclared |
  | ------- | -------------- | -------- | ----------------- | ----------------- |
  | `var`   | Function scope | Yes      | Yes               | Yes               |
  | `let`   | Block scope    | No       | Yes               | No                |
  | `const` | Block scope    | No       | No                | No                |

<br/>

## Enhanced `for` loop

- `for in` loop

  ```
  function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Circle is of radius " + radius);
    },
  };
  }
  let circleObj = createCircle(2);
  for (let item in circleObj) console.log(item);
  ```

- `for of` loop

  ```
  for (let key of Object.keys(circleObj)) console.log(key) // Enumerating keys;
  for (let entry of Object.entries(circleObj)) console.log(entry) // Enumerating key-value pairs;
  for (let [key, entry] of Object.entries(circleObj)) console.log(key + '-->' +entry) // Enumerating key and key-value pairs;

  //Enumerating idx and values in an array
  const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];
  for(const [i, name] of names.entries())  console.log(i + '-->' + name);
  ```

<br/>

## Rest, Spread & default

### Rest(...) Parameter

- Don't use `arguments` keyword. It is a kind of wannabe Array, but not an `Array`. It is a poorly designed keyword.
- Use **_rest(...)_** parameter instead of `arguments`. It is an `Array` type. It represents the varargs in a function(). When using rest, each argument is treated as different elements in array.

  ```
  const getMax = function(...numbers){
      return numbers.reduce((num1, num2) => num1 > num2 ? num1 : num2)
  }
  const maxNo = getMax(7, 9, 3, 6)
  console.log(maxNo)
  ```

### Spread(...) Operator

- By default the rest operator expects discrete values to be passed as function arguments. So when an array is passed as an argument, the whole array is treated as the first element in the arguments array. So what if we want to pass an array to a function that expects varargs with ... rest operator.
- Here comes the **_spread(...)_** operator. It looks same as the `rest`, but it is on the sending side of a function call. The spread operator spreads the elements inside an array as individual elements.

  ```
  const getMax = function(...numbers){
      return numbers.reduce((num1, num2) => num1 > num2 ? num1 : num2)
  }
  const values = [9, 17, 5, 2]
  const maxValue = getMax(...values)
  console.log(maxValue)
  ```

- Spread can be used independent of the fact if the called function is using rest or named parameters.
- It can be used to clone or combine arrays as well.

  ```
  const array1 = ['John', 'Joe']
  const array2 = ['Jill', 'Jim']
  const combinedArray = [...array1, 'Jerry', ...array2 ]
  console.log(combinedArray)
  ```

- Spread operator can be used to make copy of objects as well
  ```
  const obj = {name: 'Alex', age: 12, status: 'available'}
  const objCopy = {...obj, age: obj.age + 1}
  console.log(objCopy)
  ```
- Spread allows you to make a shallow copy of an array or object, meaning that any top level properties will be cloned, but nested objects will still be passed by reference.

### Default Parameters

- We can provide a default value to function arguments. In case a value is not passed in that particular argument then the default value will be used.
- We can also pass a default expression which can get values from the parameters which are left of it

  ```
  const greet = function(name, msg = `Hi${name.length}`){
      console.log(`${msg} ${name}`)
  }
  greet('Jerry')
  greet('John', 'Hello')
  ```

> **Note :**
>
> - Spread operator is used to spread object or array as discrete elements when _sending_ it to a function
> - Rest operator is used to accept different parameters as an array when _receiving_ it in a function
> - `undefined` is replaced by default values, but not `null`. But it is not advisable to pass `null` or `undefined` to default values

<br/>

## Useful Additions: Symbols & Generators, Arrow Functions, Literals & Destructuring

<br/>

## `Symbol` - the new primitive type

- Previously JavaScript had 5 primitive types - `number`, `string`, `boolean`, `null`, and, `undefined`. `Symbol` is a new primitive type in JavaScript intended for limited specialized use.
- Interally a Symbol maintains a unique Id for each variable defined as Symbol. No two Symbols can be same.
- We can add labels to a Symbol, which just adds a reference to a Symbol.
- Only when two Symbols are defined using `Symbol.for()` and have the same labels, then they are equal. For all other scenarios Symbols are always unique.
- Symbols can be used for 3 distinct purposes -

  1. To define properties for objects in such a way they _**don’t appear during normal iteration**_. These properties are not private. They’re just not easily discovered like other properties. When properties of an object are iterated using `for ... in` loop, Symbol properties are not visible. Hence, Symbols can be used to store the metadata of an object.
  2. To easily _**define a global registry**_ or dictionary of objects.
  3. To **_define some special well-known methods_** in objects. This feature, which fills the void of interfaces, is arguably one of the most important purposes of Symbol.

  ```
  const x = Symbol();
  const y = Symbol();
  console.log(x);
  console.log(y);
  console.log(x === y);
  const a = Symbol.for("someValue");
  const b = Symbol.for("someValue");
  console.log(a === b);
  ```

  Refer Venkat's book [Rediscovering JavaScript](https://learning.oreilly.com/library/view/rediscovering-javascript/9781680506174/f_0035.xhtml#d24e6098)

<br/>

## Generators (\*)

- Refer Venkat's book [Rediscovering JavaScript](https://learning.oreilly.com/library/view/rediscovering-javascript/9781680506174/f_0036.xhtml#d24e7265)
- [Additional Reference](https://www.taniarascia.com/understanding-generators-in-javascript/)

<br/>

## Arrow Functions

- An arrow function expression is a syntactically compact alternative to a regular function expression.
- Arrow functions use lexical scoping whereas regular functions use dynamic scoping.
- Arrow function do not have their own binding to `this`, `super`, `new.target`, `arguments`. They go one level up to the next level for execution.

  ```
  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  console.log(materials.map(material => material.length));
  ```

  > **Note** :
  >
  > **Lexical Scoping**:
  >
  > - An unbounded variable is bounded to a definition in the defining scope
  > - We can roll our eye balls over the code and find the variable to bind to
  > - In a regular function, all variables are lexically scoped except `this` and arguments which are dynamically scoped
  >
  > **Dynamic Scoping**:
  >
  > - An unbounded variable is bounded to a variable passed in by the caller of the function

<br/>

## Literals

### Template Literal

- Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

  ```
  const str = `The sum of 2 + 2 is ${2+2}`
  console.log(str)
  ```

### Enhanced Object Literal

- It provides a shorthand syntax for **initializing properties** from variables.

  ```
  // ES5
  function getLaptop1(make, model, year) {
    return {
      make: make,
      model: model,
      year: year
    }
  }
  console.log(getLaptop1("Apple", "MacBook", "2019"));
  // ES6
  function getLaptop2(make, model, year) {
    return {
      make,
      model,
      year
    }
  }
  console.log(getLaptop2("Apple", "MacBook", "2019"));
  ```

- It provides a shorthand syntax for **defining function methods**.

  ```
  //ES5
  function getLaptop3(make, model, year) {
    return {
      sayModel : function() {
      return model;
      }
    }
  }
  console.log(getLaptop3("Apple", "MacBook", "2019").sayModel());
  //ES6
  function getLaptop4(make, model, year) {
      return{
      sayModel() {
      return model;
      }
    }
  }
  console.log(getLaptop4("Apple", "MacBook", "2019").sayModel());
  ```

- It enables the ability to have **computed property** names in an object literal definition.

  ```
  var name = "make";
  var i = 0;
  const laptop = {
    [name + ++i]: "Apple",
    [name + ++i]: "Dell",
    [name + ++i]: "Lenovo",
  }
  console.log(laptop.make1);
  console.log(laptop.make2);
  console.log(laptop.make3);
  ```

<br/>

## Array & Object Destructuring

- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Array Destructuring

    ```
    const foo = ['one', 'two', 'three'];
    const [red, yellow, green] = foo;
    console.log(red, yellow, green);
    ```

### Object Destructuring

    ```
    const weight = 'WeightKG';
    const sam = {
      name: 'Sam',
      age: 2,
      height: 110,
      address: { street: '404 Missing St.'},
      shipping: { street: '500 NoName St.'},
      [weight]: 15,
      [Symbol.for('favoriteColor')]: 'Orange',
    };
    // Destructuring
    const { name, age: theAge } = sam; // Extracting variables with same name
    const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam; // Extracting Computed Properties
    const { gender = 'Male'} = sam; // Assigning default values
    const { name, address: { street }, shipping: { street: shipStreet } } = sam; // Deep destructuring. Avoiding collision for street by giving a name
    ```

  <br/>
  <br/>

# 3. OO Javascript

<br/>

## Class

- Classes in JavaScript needs to be defined using `class`.
- Classes were introduced as a part of ES6 2015.
- Classes are functions which is a syntactical sugar over prototypes and inheritance

<br/>

## Constructor

- Don't need to define variables, use variables as required with `this` keyword inside a constructor.

<br/>

## Properties

- Properties of a class can be set and get using getters and setters in JavaScript.
- **Getter** :
  - A getter property needs to be a method prefixed with a `get` that returns some relevant value.
  - There should not be any argument in a getter.
  - It cannot be called as a function (). It should be simply fetched as a property using dot notation.
- **Setter** :

  - A setter property needs to be a method prefixed with a `set`
  - There can be only one formal parameter in a setter.
  - It cannot be called as a function (). The value that needs to be set should be assigned using =.

  ```
  class Car {
    constructor(year){
      this.year = year;
      this.carColor = 'black';
    }
    get color(){
      return this.carColor;
    }
    set color(carColor){
      this.carColor = carColor;
    }
  }
  const car = new Car(2010);
  console.log(car.color);
  car.color = 'Red';
  console.log(car);
  ```

<br/>

## `static` method

- A method can be static by just prefixing it with `static` keyword.
- `static` method can be called using class and not using objects.
- A property can also be made `static` and can be referred using the class.
- A field can also be made `static` but that needs to be defined outside the class, but it can be used and modified inside the constructor. It can be defined by using the class name and dot notation.
  ```
  class Car {
    constructor(year){
      this.year = year;
      Car.model = "Coupe";
    }
    static get make(){
      return "BMW";
    }
  }
  Car.model="Sedan";
  const car = new Car(2010);
  console.log(Car.make);
  console.log(Car.model);
  ```

<br/>

## Class Expression

- Classes can be created on the fly using class expression.
- The same class expression can be used for different classes.
  ```
  const classFactory = function(...properties){
    return class{
      constructor(...values){
        for (const [index, property] of properties.entries()){
          this[property] = values[index];
        }
      }
    }
  }
  const Book = new classFactory('title','pages');
  const book1 = new Book('Harry Potter', 400);
  console.log(book1);
  const Car = new classFactory('year', 'model', 'color');
  const car1 = new Car(2010, 'BMW', 'Black');
  console.log(car1);
  ```

<br/>

## Built-in Classes : `Set`, `Map`, `WeakSet` & `WeakMap`

### `Set`

- A `Set` is a unique collection of primitives and objects. Duplicates are not allowed inside a `Set`.
- We can create an empty set and add objects to it, or initialize a set with the contents of an iterable, like an array.

### `Map`

- A `Map` is an associative collection of keys and values where the keys are distinct.
- Keys and values may be any primitive or object.
- We can create an empty map and then add values to it, or we can create it with some initial values.

### `WeakMap` & `WeakSet`:

- The word **_weak_** refers to coupling, as in **weak coupling**. A `Set`, for example, tightly holds on to the data that is added. However, a `WeakSet` will hold on only weakly and will not prevent the object from being released. The same holds true for `Map` and `WeakMap` as well.
- While the values stored in a `Set` and the keys placed into a `Map` may be primitive or objects, the values in a `WeakSet` and keys in a `WeakMap` are required to be objects, not primitives.
- The weak collections are not enumerable. The reason for this is while in the middle of enumeration, if it were possible, an object held in the collec- tion may be garbage collected and that would throw a wrench into the iteration.

  > **Note**:
  >
  > - **Maps over Objects**:
  >
  >   1. **Size** - Maps have a size property, whereas Objects do not have a built-in way to retrieve their size.
  >   2. **Iteration** - Maps are directly iterable, whereas Objects are not.
  >   3. **Flexibility** - Maps can have any data type (primitive or Object) as the key to a value, while Objects can only have strings.
  >   4. **Ordered** - Maps retain their insertion order, whereas objects do not have a guaranteed order.
  >
  > - **Objects over Maps**:
  >
  >   1. **JSON** - Objects work flawlessly with JSON.parse() and JSON.stringify(), two essential functions for working with JSON, a common data format that many REST APIs deal with.
  >   2. **Working with a single element** - Working with a known value in an Object, you can access it directly with the key without the need to use a method, such as Map’s get().

<br/>

## Inheritance

- Class based inheritance is static and not flexible. A class is always tied up to the parent class from which it is inheriting.
- Prototypal inheritance is dynamic and is flexible. You can dynamically set the prototype of an object after it is created.
- In JavaScript, prototypal inheritance is used, i.e., object based inheritance and not class based inheritance.
- In JavaScript inheritance, gets are deep and sets are shallow.

### **Prototypal Inheritance:**

- When an object property is accessed , JavaScript will search for the property in the object first. If not found it will search in parent object's prototype. If it is not found, it will search in the parent's linked prototype until it reaches Object.prototype. This is how the prototypal inheritance works in JavaScript.

<br/>

## Modules

- Creating
- Exporting
- Importing
- Read Venkat's book [Rediscovering JavaScript](https://learning.oreilly.com/library/view/rediscovering-javascript/9781680506174/f_0070.xhtml#chap.modules)

<br/>
<br/>

# 4. Advanced Topics

<br/>

## Promises

- Getting over the callback hell
- Promises: `async` and `await`
- Read Venkat's book [Rediscovering JavaScript](https://learning.oreilly.com/library/view/rediscovering-javascript/9781680506174/f_0077.xhtml#chap.promises)
- [Additional Reference](https://www.taniarascia.com/promise-all-with-async-await/)

<br/>

## Metaprogramming

- Dynamic access
- Reflect
- Proxy
- Read Venkat's book [Rediscovering JavaScript](https://learning.oreilly.com/library/view/rediscovering-javascript/9781680506174/f_0085.xhtml#chap.metaprogramming)

<br/>
<br/>

# Additional Reading

<br/>

- [Arrays](https://www.taniarascia.com/understanding-arrays-in-javascript/)
- [String Manipulation](https://www.taniarascia.com/how-to-index-split-and-manipulate-strings-in-javascript/)
- [Map, Filter & Reduce](https://www.taniarascia.com/real-world-examples-of-map-filter-and-reduce-in-javascript/)

```

```

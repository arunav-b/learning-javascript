# Learning JavaScript ES6

> Learning different aspects of JavaScript

## JavaScript Basics

### Use === instead of ==

- === checks for the value and data type of the variable being compared whereas == checks for only the value and not the data type
- JavaScript doesn't care if there is ';' at the end of a statement. Whenever there is a line break it quitely assumes to have a ';'. We need to be careful with this especially in `return` statements.

### `this` keyword

- There are four main contexts in which the value of this can be implicitly inferred:

  a. the global context: When referred within a simple function this still refers to the global object.
  b. as an object method: A method uses this to refer to the properties of the object.
  c. as a function/class constructor: When used inside a function/class constructor or class, this refers to the instance of the class/Function constructor.
  d. as a DOM event handler: In an event handler called by addEventListener, this will refer to event.currentTarget.

  [Additional reading on this](https://www.digitalocean.com/community/conceptual_articles/understanding-this-bind-call-and-apply-in-javascript)

### Difference Between var, let, and const

- Whenever possible use `const`. Varibles defined as `const` is immutable. `const` protects the reference but does not protect the properties inside an object.
- `let` is mutable. Always prefer using `const` over 'let` whenever possible.
- Always avoid using `var`

  | Keyword | Scope          | Hoisting | Can Be Reassigned | Can Be Redeclared |
  | ------- | -------------- | -------- | ----------------- | ----------------- |
  | var     | Function scope | Yes      | Yes               | Yes               |
  | let     | Block scope    | No       | Yes               | No                |
  | const   | Block scope    | No       | No                | No                |

### Hoisting

- A behavior of JavaScript in which variable declaration and function declaration are moved to the top of their scope.

### Objects in JS

- **Different Object functions in JS**

  - `Object.create()` - used to create a new object and link it to the prototype of an existing object.
  - `Object.keys()` - creates an array containing the keys of an object.
  - `Object.values()` - creates an array containing the values of an object.
  - `Object.entries()` - creates a nested array of the key/value pairs of an object.
  - `Object.assign()` - used to copy values from one object to another. Also two objects can be merged with Object.assign().
  - `Object.freeze()` - prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
  - `Object.seal()` - prevents new properties from being added to an object, but allows the modification of existing properties.
  - `Object.getPrototypeOf()` - used to get the internal hidden Prototype of an object

  [Additional Reading on Objects](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)

* **`call(), apply()` & `bind()`**

  - For both `call()` & `apply()`, the object passed as an argument becomes the context of `this` inside the called function
    **`call()`** : Invoke a function with a specified `this` context and optional arguments passed as varargs
    **`apply()`** : Invoke a function with a specified `this` context and optional arguments passed as array
    **`bind()`** : In order to use a function (fn()) in the context of another object (obj), bind() method is used. The resultant object can be set to a const and can be used multiple times as a separate object (fn() + obj) throughout the lifetime of the application

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

## Rest, Spread & Default

### Rest(...) Parameter

- Don't use `arguments` keyword. It is a kind of wannabe Array, but not an `Array`. It is a poorly designed keyword.
- Use `rest(...)` parameter instead of `arguments`. It is an `Array` type. It represents the varargs in a function(). When using `rest`, each argument is treated as different elements in array.

  ```
  const getMax = function(...numbers){
      return numbers.reduce((num1, num2) => num1 > num2 ? num1 : num2)
  }
  const maxNo = getMax(7, 9, 3, 6)
  console.log(maxNo)
  ```

### Spread(...) Operator

- By default the `rest` operator expects discrete values to be passed as function arguments. So when an array is passed as an argument, the whole array is treated as the first element in the arguments array. So what if we want to pass an array to a function that expects varargs with ... `rest` operator.
- Here comes the `spread(...)` operator. It looks same as the `rest`, but it is on the sending side of a function call. The spread operator spreads the elements inside an array as individual elements.

  ```
  const getMax = function(...numbers){
      return numbers.reduce((num1, num2) => num1 > num2 ? num1 : num2)
  }
  const values = [9, 17, 5, 2]
  const maxValue = getMax(...values)
  console.log(maxValue)
  ```

- Spread can be used independent of the fact if the called function is using `rest` or named parameters.
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

> - Spread operator is used to spread object or array as discrete elements when _sending_ it to a function
> - Rest operator is used to accept different parameters as an array when _receiving_ it in a function
> - `undefined` is replaced by default values, but not `null`. But it is not advisable to pass `null` or `undefined` to default values

## Iterators, Symbols & Generators, Scoping, Arrow Functions

### Enhanced `for` loop

### Symbols - the new primitive type

### Generators (\*)

### Lexical vs Dynamic Scoping

### Arrow Functions

## Template & Object Literals, Destructuring

### Template Literal

### Object Literal

### Array Destructuring

### Object Destructuring

## OO Javascript

### Class

- Classes in JavaScript needs to be defined using `class`.
- An object of a class is instantiated using the `new` keyword.
- Internally a class is of type `function` in JavaScript

### Constructor

- Don't need to define variables, use variables as required with `this` keyword inside a constructor.

### Properties

- Properties of a class can be set and get using getters and setters in JavaScript.
- **Getter** :

  - A getter property needs to be a method prefixed with a `get` that returns some relevant value.
  - There should not be any argument in a getter.
  - It cannot be called as a function (). It should be simply fetched as a property using dot notation.

- **Setter** :

  - A setter property needs to be a method prefixed with a `set`
  - There can be only one formal parameter in a setter.
  - It cannot be called as a function (). The value that needs to be set should be assigned using =

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

### `static` method

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

### Class Expression

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

### Inheritance

- Class based inheritance is static and not flexible. A class is always tied up to the parent class from which it is inheriting.
- Prototypal inheritance is dynamic and is flexible. You can dynamically set the prototype of an object after it is created.
- In JavaScript, prototypal inheritance is used, i.e., object based inheritance and not class based inheritance.
- In JavaScript inheritance, gets are deep and sets are shallow.

- **Prototypes:**

  - Prototypes in JS

- **Prototypal Inheritance:**

  - In prototypal inheritance

### Maps & Sets

- Maps over Objects:
  // 1. Size - Maps have a size property, whereas Objects do not have a built-in way to retrieve their size.
  // 2. Iteration - Maps are directly iterable, whereas Objects are not.
  // 3. Flexibility - Maps can have any data type (primitive or Object) as the key to a value, while Objects can only have strings.
  // 4. Ordered - Maps retain their insertion order, whereas objects do not have a guaranteed order.

- Objects over Maps:
  // 1. JSON - Objects work flawlessly with JSON.parse() and JSON.stringify(), two essential functions for working with JSON, a common data format that many REST APIs deal with.
  // 2. Working with a single element - Working with a known value in an Object, you can access it directly with the key without the need to use a method, such as Map’s get().

- Sets are useful when working with duplicate data

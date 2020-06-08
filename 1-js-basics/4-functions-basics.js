// 1. arguments in a function -> arguments is an object
function sum() {
  let sum = 0;
  for (let item of arguments) sum += item;
  return sum;
}
console.log(sum(12, 324, 3234));

// 2. Getter and Setter
const person = {
  firstName: "",
  lastName: "",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(someValue) {
    if (typeof someValue !== "string") throw new Error("Invalid value passed");
    const value = someValue.split(" ");
    this.firstName = value[0];
    this.lastName = value[1];
  },
};

// 3. Rest operator -> ...items is an array
// Rest syntax can be used as the only parameter or as the last parameter in the list. If used as the only parameter, it will gather all arguments, but if it’s at the end of a list, it will gather every argument that is remaining
//
// Default value is passed if argument is initialized
function sum1(someValue = 23, ...items) {
  console.log(someValue);
  return items.reduce((sum, item) => sum + item, 0);
}
console.log(sum1(undefined, 324, 3234, 8782));

// 4. Object destructing using Rest Operator
const { isLoggedIn, ...rest } = { id: 1, name: "Ben", isLoggedIn: true };
console.log(isLoggedIn);
console.log(rest);

// 5. Error Handling
try {
  person.fullName = "Arunav Bhattacharya";
  person.fullName = true;
  console.log(person.fullName);
} catch (e) {
  alert(e);
  //console.error(e);
}

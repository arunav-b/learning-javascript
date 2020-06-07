// 1. Creating a map
const map = new Map();
console.log(map);

// 2. Adding values in a Map. Can accept any data type as key.
map.set("StringKey", "any Value");
map.set(1, "some Value");
map.set(1, "new Value"); // Previous value will be overridden once the same key is used to set
map.set(true, "Boolean value");
// Setting an object as a key in map. In JS, for doing an equality comparison (===) for an object as a key in map, the reference to the object is compared. So two objects with same values can be inserted in the map.
map.set({ key: "object-key", value: "object-value" }, "mapValue");
map.set({ key: "object-key", value: "object-value" }, "Duplicate map value");
// Using the same reference will however have one only the latest entry in the map
const objKey = { key: "object-key", value: "object-value" };
map.set(objKey, "Object Key Reference Initial Value");
map.set(objKey, "Object Key Reference Updated Value");
console.log(map);

const map1 = new Map([
  ["firstName", "Luke"],
  ["lastName", "Skywalker"],
  ["occupation", "Jedi Knight"],
]);
console.log(map1);

// 3. Converts map to an Object
const objFromMap = Object.fromEntries(map1);
console.log(objFromMap);

// 4. Converts map to an Array
const arrayFromMap = Array.from(map1);
console.log(arrayFromMap);
// Output
// [ ['firstName', 'Luke'],
// ['lastName', 'Skywalker'],
// ['occupation', 'Jedi Knight'] ]

// 5. has() to check for an item in a map
console.log(map1.has("firstName")); // true
console.log(map1.has("age")); // false

// 6. get() values from map
console.log(map1.get("firstName"));

// 7. delete() values from map
console.log(map1.delete("age")); // false
console.log(map1.delete("occupation")); //true
console.log(map1);

// 8. Empty a map
map1.clear();
console.log(map1);

// 9. Keys, Values, and Entries for Maps
const map2 = new Map([
  [1970, "bell bottoms"],
  [1980, "leg warmers"],
  [1990, "flannel"],
]);
// Keys
console.log(map2.keys());
//Values
console.log(map2.values());
//Entries
console.log(map2.entries());

// 10. Iterate over maps
// Using forEach
map2.forEach((value, key) => {
  console.log(`key: ${key} and value: ${value}`);
});
// Using for...of
for (const [key, value] of map2) {
  console.log(`${key}: ${value}`);
}

// 11. Size of map
console.log(map2.size);

// Maps over Objects:
// 1. Size - Maps have a size property, whereas Objects do not have a built-in way to retrieve their size.
// 2. Iteration - Maps are directly iterable, whereas Objects are not.
// 3. Flexibility - Maps can have any data type (primitive or Object) as the key to a value, while Objects can only have strings.
// 4. Ordered - Maps retain their insertion order, whereas objects do not have a guaranteed order.
// Objects over Maps:
// 1. JSON - Objects work flawlessly with JSON.parse() and JSON.stringify(), two essential functions for working with JSON, a common data format that many REST APIs deal with.
// 2. Working with a single element - Working with a known value in an Object, you can access it directly with the key without the need to use a method, such as Map’s get().

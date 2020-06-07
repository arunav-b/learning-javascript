// 1. Defining a Set - can store unique data
const set = new Set();
console.log(set);

// 2. Adding Items to set
set.add("Some value");
set.add("Another value");

// 3. Array to Set
const set1 = new Set(["Beethoven", "Mozart", "Chopin", "Chopin"]); // Duplicate values will be ignored
console.log(set1);

// 4. Set to Array
const arr = [...set1];
console.log(arr);

// 5. Delete an item
set1.delete("Beethoven"); // true
console.log(set1);

// 6. Check for the existence of an item
set1.has("Beethoven"); // false
console.log(set1);

// 7. Clear a Set
set1.clear();
console.log(set1);

// 8. Check the size of a Set
console.log(set1.size);

// 9. Keys, Values, and Entries for Sets
// Keys and values are same in Sets.
// Using only values() makes sense in Sets.
const set2 = new Set([1, 2, 3, "string1", "string2", true]);
// Keys
console.log("Keys: ", set2.keys());
//Values
console.log("Values: ", set2.values());
//Entries
console.log("Entries: ", set2.entries());

// 10. Iteration over Sets
// Using forEach
set2.forEach((value) => console.log(value));
// Using for...of
for (let value of set2) console.log(value);

// Sets are useful when working with duplicate data

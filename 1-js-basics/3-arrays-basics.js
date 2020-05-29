// 1. Defining an array
const numbers = [6, 7];

// 2. And elements to array
numbers.push(8, 9); // End 
numbers.unshift(11, 12); // Start
// Middle after a particular position 
numbers.splice(3, 0, 'ab', 'cd');

console.log(numbers);
console.log(numbers.indexOf(7));

// 3. Delete elements in an array
numbers.pop(); // End
numbers.shift(); // Beginning
numbers.splice(4, 1);
console.log(numbers);

// 4. Find elements in an array
const find = numbers.find(function (number) {
    return number === 8;
})
const findWithArrow = numbers.find((number) => number < 8);
console.log(find);

const persons = [
    { id: 1, name: 'Madhuri' },
    { id: 2, name: 'Arunav' },
    { id: 3, name: 'arpita' }
]
// 5. Sorting an array
// Sort using the default way
const sorted1 = persons.sort(); 
// Sort implementation can be provided
const sorted = persons.sort((a, b) => {
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    return 0;
});
console.log(sorted);

// 6. concat 2 arrays
const concat = persons.concat(numbers);
console.log(concat);
// Using spread operator
const concatUsingSpread = [...persons, ...numbers];
console.log(concatUsingSpread);

// 7. Join elements in an array to a string
const joined = numbers.join(',');
console.log(joined);

// 8. every() and some() -> Returns boolean
const mixedNumbers = [1, -2, 0, 7];
// every() - returns boolean if all the conditions are met
const isAllPositive = mixedNumbers.every((number) => number >= 0);
console.log(isAllPositive);
// some() - returns boolean if any one of the condition is met
const isAnyNegative = mixedNumbers.some((number) => number < 0);
console.log(isAnyNegative);

// 9. Filter, Map, Reduce
//Filter -> Returns filtered array
const filtered = mixedNumbers.filter(number => number > 0);
console.log(filtered);
//Map -> Maps input array to a different type
const mapped = mixedNumbers.map(number => ({id: number}));
console.log(mapped);
// Reduce -> Reduces input array to a single value. The logic for reduction is upto the user
const reduced = mixedNumbers.reduce((sum, value) => sum + value, 0);
console.log(reduced);

// 10. Chaining functions
const chained = mixedNumbers
    .filter(number => number !== 0)
    .map(filteredNumber => ({key: filteredNumber}))
    .reduce((product, numberObj) => product * numberObj.key, 1);

console.log(chained);

// 11. includes() - checks if present in array
console.log(mixedNumbers.includes(-7));
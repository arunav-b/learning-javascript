// 1. arguments in a function -> arguments is an object
function sum() {
    let sum = 0;
    for (let item of arguments)
        sum += item;
    return sum;
}
console.log(sum(12, 324, 3234));

// 2. Rest operator -> ...items is an array
// Default value is passed if argument is initialized
function sum1(someValue = 23, ...items) {
    console.log(someValue);
    return items
        .reduce((sum, item) => sum + item, 0);
}
console.log(sum1(undefined, 324, 3234, 8782));

// 3. Getter and Setter
const person = {
    firstName: '',
    lastName: '',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(someValue) {
        if (typeof someValue !== 'string')
            throw new Error('Invalid value passed');
        const value = someValue.split(' ');
        this.firstName = value[0];
        this.lastName = value[1];
    }
};

// 4. Error Handling
try {
    person.fullName = 'Arunav Bhattacharya';
    person.fullName = true;
    console.log(person.fullName);
} catch(e){
    alert(e);
    //console.error(e);
}



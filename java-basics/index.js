// my first code
console.log('Hello world');

//using variables
let Name = 'vinitha';
console.log(Name);

let firstName = 'vinitha';
let lastName = 'pilli';
console.log(firstName, lastName);

//using objects
person = {
    name: 'vinni',
    age: 20
};
console.log(person);

// dot notation
person.name = 'vinni';

// bracket notation
person['name'] = 'prabhas';

console.log(person.name);

// using Array
let choosedColors = ['green', 'red'];
console.log(choosedColors);

let choosenColors = ['purple', 'red'];
choosenColors[2] = 'yellow';
console.log(choosenColors.length);

//using functions
function greet(name, lastName){
    console.log('hello ' + name +' ' + lastName);
}
greet('Vinitha', 'pilli');
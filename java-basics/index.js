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

//arthematic operator
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//increment 
console.log(++x);

//decrement
console.log(--x);

//assignment operator
 let z = 10;
 console.log(z);

 z += 5;
 console.log(z);

 z *= 5;
 console.log(z);

 //comparision operator
 let a = 1;
 console.log(a > 0);
 console.log(a >= 1);
 console.log(a < 1);
 console.log(a <= 1);

 //equality
 console.log(a === 1);
 console.log(a !== 1);

 //this equality does not care about type it checks the values in it
 console.log(a == 1);
 console.log("1" == 1);

 //ternary operator
 //if a flowervendor has a more than 100 flowers
 //they are 'rose' flowers, otherwise,
 //they are 'lily' flowers.
 let flowers = 95;
 let type0 = flowers > 100 ? 'rose' : 'lily';
 console.log(type0);

 let type1 = flowers < 100 ? 'rose' : 'lily';
 console.log(type1);

 //logical operators
 //And operator
 //let highIncome = true;
 //let goodCreditScore = true;
 //let eligibleForLoan = highIncome && goodCreditScore;
 //console.log(eligibleForLoan);

 //Or operator
 let highIncome = false;
 let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

//Not operator
let applicationRefund = !eligibleForLoan;
console.log(applicationRefund);

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


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

//switch operator
//let role = 'moderator';
//switch (role){
  //  case 'guest':
        console.log('guest user');
  //      break;

     //   case 'moderator':
            console.log('moderator user');
   //         break;
//}

let role = '';
if (role === 'guest' && hour > 12)
    console.log('guest');
else if (role === 'moderator') 
    console.log('moderator')
    else 
   console.log('unknown user');

   //functions
   
   let num = min(6, 3);
   console.log(num);
   
   function min(a, b){
   return(a > b) ? a : b;
   }
   
//isLandscape
   console.log(isLandscape(500, 700));

   function isLandscape(width, height){
    return(width > height);
   }

   //fizzbuzz
   const output = fizzBuzz(10);
   console.log(output);

   function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number';

    if (input % 3 === 0)
        return 'fizz';
    
    if (input % 7 === 0)
        return 'Buzz';

    if((input % 3 === 3) && (input % 7 === 0))
        return 'fizzBuzz';
     
    return input;
   }


   //Even & Odd
   showNumbers(3);

   function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
   }

   //count Truthy

   const array = [0, null, undefined,'',1,2, 3];

   console.log(countTruthy(array));

   function countTruthy(array){
    let count = 0;
    for (let value of array)
        if (value)
          count++;
        return count;
   }

   //string 

   const movie = {
    title: 'cat',
    launchYear:'2002',
    rating: 3.4,
    producer: 'unknown',
   };

   showProperties(movie);
   function showProperties(obj){
    for (let key in obj){
        if (typeof obj[key] === 'string' )
            console.log(key, obj[key]);
    }
   }

   //multiple of 3 & 5
   console.log(sum(10));

   function sum(limit){
    let sum = 0;
    for (let i=0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    return(sum);
   }

//Grades

   const marks = [80, 80, 40];
   console.log(calculateGrade(marks));

   function calculateGrade(marks){
   const average = calculateGrade(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return'A';
   }

   function calculateGrade(marks){
    let sum = 0;
    for (let value of marks)
        sum += value;
   return sum / marks.length;
   return average;
   }

//stars
showStars(3);

function showStars(rows){
for (let row = 1; row <= rows; row++) {
let pattern = '';
for (let i = 0; i < row; i++)
    pattern += '*';
console.log(pattern);
}
}
  
   
   

   
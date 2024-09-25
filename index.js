let today = new Date();
let dayIndex = today.getDay();


 if (dayIndex === 0) {
    console.log('sunday');
}
 else if (dayIndex === 1) {
    console.log('monday');
} 
else if (dayIndex === 2) {
    console.log('tuesday');
} 
else if (dayIndex === 3) {
    console.log('wednesday');
}
 else if (dayIndex === 4) {
    console.log('thursday');
} 
else if (dayIndex === 5) {
    console.log('friday');
}
else if(dayIndex === 6){
 console.log('saturday');
}

//numbers
const number = [3, 4];

number.push(5, 6);

number.unshift(1, 2);
console.log(number);

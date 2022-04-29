// Creating array

const numbers = [1,2,3,4,5];
const newArr = new Array(1,2,4,5,6,6);
const fruit = ['apple','banana','pead']
// console.log(fruit);

let val;

// array length
val = numbers.length;
// check if is array
val = Array.isArray(numbers);
// Accessing values
val = numbers[0];
// insert
numbers[2] = 100;
// find index
val = numbers.indexOf(100);

// mutating arrays
numbers.push(50);
// add to front
numbers.unshift(20);
// take off front end
numbers.pop();
// take off from front
numbers.shift();
// splice values  :  to remove bunch of elements from the array
numbers.splice(1,1)
// reverse array
numbers.reverse();
// Concatenate arrays
val = numbers.concat(fruit);
// Sort the array
val = numbers.sort();
// Use the compare functions to sort
val = numbers.sort(function(x , y){
    return x - y;
});

// Find
function underFifty( num ) {
    return num < 50;
}

val = numbers.find(underFifty);

console.log(numbers)
console.log(val);
let val;

// Number to string

val = String(9);
val = String(4+4);

// Boolean to string

val = String(true);

// Date to a string

val = String(new Date());

// Array to String

val = String( [1,2,3,4]);

// inbuilt functions

val = (5).toString();

// Strings to numbers 

val = Number('5');

val = Number(true);

// console.log(val);
// console.log(typeof(val));
// console.log(val.toFixed()); // only for numbers
// console.log(val.length);

// Type Coversion

const val1 = (5).toString();
const val2 = 6;
const sum = val2 + val1;
console.log(sum);
console.log(typeof(sum));

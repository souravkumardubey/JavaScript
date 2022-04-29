// Strings

const name1 = 'Sourav';
const name2 = new String('Sourav');

// console.log(name1);
// console.log(typeof name1);
// console.log(name2);
// console.log(typeof name2);

// Output is no because type isn't same. === compare the type. 
// if ( name2 === 'Sourav' ) //console.log('YES');
// else //console.log("no"); 

// == conpares the actual values
// if ( name2 == 'Sourav' ) //console.log('YES');
// else //console.log("no"); 

// Number
const num1 = 5;
const num2 = new Number(5);

// boolean

const bool1 = true;
const bool2 = new Boolean(false);

// funtions 

const getSum = function(x , y) {
    return x + y;
}

// console.log(getSum(5,6));

// Objects

const john = { name: 'John'};
const john2 = new Object({name:'John'});
// console.log(typeof john);
// console.log(typeof john2);

// Arrays

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// console.log(arr1);
// console.log(arr2);

// Regular expressions


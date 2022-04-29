//  document.getElementsByClassName()
/*
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello wORLD';

// Above one is for getting elements at global scope

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);
*/


//  document.getElementsByTagName()
/*
let lis = document.getElementsByTagName('li');
console.log(lis);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello wORLD';
 
// lis.reverse();

// HTML Collection isnt same as arrays
// Convert HTML Collection into array

lis = Array.from(lis);
// lis.reverse();

lis.forEach(function(li , index){
    li.textContent = `${index}: Hellow World `;
    console.log(li);
});
*/

// querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item , index){
    item.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li , index){
    li.style.background = '#ccc'
});

liEven.forEach(function(li , index){
    li.style.background = '#f4f4f4';
});

console.log(items);
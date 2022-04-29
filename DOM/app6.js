// Replace elements

// Create Element

const newHeading = document.createElement('h2');

// add id

newHeading.id = 'task-title';

// create a new text node

newHeading.appendChild(document.createTextNode('Task List'));

// newHeading.className  = 'heading';

// accessing the present element

const oldHeading = document.getElementById('task-title');

// parent

const cardAction = document.querySelector('.card-action');

// replace

cardAction.replaceChild(newHeading,oldHeading);

// console.log(newHeading);

// remove element

const lis = document.querySelectorAll('li');

const list = document.querySelector('ul');

// remove list item

lis[0].remove();

// remove child element

list.removeChild(lis[2]);

// CLASSES 

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// ATTRIBUTES

val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com'); // add a link to the delete img 
val = link.hasAttribute('href');
val = link.hasAttribute('title');

link.setAttribute('title','google');

val = link.hasAttribute('title');

link.removeAttribute('title');

val = link;

console.log(val);
// Create an element

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add Attribute
li.setAttribute('title','New Item');

// Create text node and append

li.appendChild(document.createTextNode('Hello World'));

// create new link element

const link = document.createElement('a');

// add classes need

link.className = 'delete-item secondary-content';

// add icon HTML

link.innerHTML = "<i class = 'fa fa-remove'></i>"

// append link into child

li.append(link);

// console.log(link);

// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);
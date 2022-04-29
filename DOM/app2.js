
/* document.getElementById() */
/*
console.log(document.getElementById('task-title'));

// Get things from elements

console.log(document.getElementById('task-title').id);

// Change styling

document.getElementById('task-title').style.color = 'red';
document.getElementById('task-title').style.backgroundColor = 'yellow';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';


// Change content
const taskTitle = document.getElementById('task-title');
taskTitle.textContent = "Task List";
taskTitle.innerText = "Tasks";
taskTitle.innerHTML = '<span style= "color:blue"> My task</span>';
*/


// document.querySelector()

console.log(document.querySelector("#task-title")); // to access id
console.log(document.querySelector(".card-title")); // to access class
console.log(document.querySelector("h5")); // to access any element..it returns the 1st occurence

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red'; // nesting
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Item 1';
document.querySelector('li:nth-child(odd)').style.backgroundColor = '#ccc';

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// select.addEventListener('change',runEvent);  // requires JQuer y


// to clear input
taskInput.value = '';

// form.addEventListener('submit',runEvent);

// keydown
// taskInput.addEventListener('keydown' , runEvent);
// keyup
// taskInput.addEventListener('keyup' , runEvent);
// keypress
// taskInput.addEventListener('keypress' , runEvent);

// focus 
// taskInput.addEventListener('focus',runEvent);
// blue
// taskInput.addEventListener('blur',runEvent);
// cut -when we cntrl+z or cut the text
// taskInput.addEventListener('cut',runEvent);
// paste
// taskInput.addEventListener('paste',runEvent);
// input
// taskInput.addEventListener('input',runEvent);

function runEvent(e) {

    console.log(`EVENT TYPE : ${e.type}`);

    console.log(e.target.value);

    // heading.innerText = e.target.value; 

    // get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}
// set local storage item

//  localStorage.setItem('name','Sourav');
//  localStorage.setItem('age','20');

// `set session storage item

// sessionStorage.setItem('name','Sourav');

// REMOVE FROM STORAGE

// localStorage.removeItem('name');

// get value

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage

// localStorage.clear();
// console.log(name,age);

document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value; 
    // const value = localStorage.getItem('task');
    // console.log(value);
    
    let tasks;
    
    if ( localStorage.getItem('tasks') === null ) {
        
        tasks = [];
        
    }
    else {
        
        tasks = JSON.parse(localStorage.getItem('tasks'));
        
    }
    
    tasks.push(task);
    
    localStorage.setItem('tasks',JSON.stringify(tasks));
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
});
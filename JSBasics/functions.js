// function declaration

// const car = {
//     model: 'Wraith',
//     drive: function (age) {

//     }
// }

function greet( firstName ) {
    // console.log("Hello");
    return 'Hello ' + firstName;
}

// const drive =  function (age) {
//     return true;
// }

console.log(greet("Sourav"));

// function expressions

const square = function(x) {

    return 2*x;

};

console.log(square(6));

// Immediately invokable function expressions - IIFEs

(function(){
    console.log("IIFE ran..")
})();

(function(name){
    console.log("Hello "+name)
})('Sourav');

// Property methods

const todo = {
    add: function() {
        console.log('Add todo...')
    }
}

todo.add();

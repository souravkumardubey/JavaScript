// const sayHello = function() {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// one line returns
// const sayHello = () => 'Hello';

// return object
// const sayHello = () => ({msg: 'Hello'});
// console.log(sayHello());

// single parameter does not need paranthesis
// const sayHello = ( name ) => console.log(`Hello ${name}`);
// const sayHello = name => console.log(`Hello ${name}`);

// multiple parameters need ()
// const sayHello = ( firstName , lastName ) => console.log(`hello ${firstName} ${lastName}`);

// sayHello('Sourav' ,'Kumar Dubey')

const users = ['Nathon' , 'John' , 'Sourav'];

// const nameLengths = users.map( function ( name ) {
//     return name.length;
// } );

// Shorter
// const nameLengths = users.map( ( name ) => {
//     return name.length;
// } );

// Shortest
const nameLengths = users.map( name => name.length );

console.log(nameLengths);

// Implemented Fetch API using arrow functions...swtich to it please :)

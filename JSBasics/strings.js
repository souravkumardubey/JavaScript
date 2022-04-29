const firstName = 'Sourav';
const lastName = 'Kumar Dubey';

let val;

val = firstName + ' ' + lastName; // concatenation

val += ' YOYO';

val = 'Hellow my name is Sourav';
val += "I am 20";
// Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';
// Length
val = val.length;

// Concat
val = firstName.concat(' ',lastName);

// Change Case

val = val.toUpperCase();
val = lastName.toLocaleLowerCase();

// Accessing Characters of string

val = firstName[0];

val = firstName.indexOf('o');

console.log(val);
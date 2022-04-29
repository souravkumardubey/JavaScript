const personPrototypes = {
    greeting: function() {
        return `Hello there! ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){ 
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);

mary.firstName = 'Sourav';
mary.lastName = 'Dubey';

mary.getsMarried('Shah'); 

console.log(mary.greeting());

const person1 = Object.create(personPrototypes , {
    firstName: {value: 'Sourav'},
    lastName: {value: 'Dubey'},
    age: {value: 20}
});

console.log(person1);
console.log(person1.greeting());
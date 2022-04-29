// ES6 Classes

class Person {

    constructor( firstName , lastName , dob ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday;
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried( newLastName ) {
        this.lastName = newLastName;
    }

    static addNumbers( x ,y ) {
        return x + y;
    }

}

const person = new Person('Sourav','Dubey','January 12 2002');

console.log(person);
console.log(person.greeting());
console.log(person.calculateAge());
person.getsMarried('Shah');
console.log(person.greeting());
console.log(Person.addNumbers(1 ,2));

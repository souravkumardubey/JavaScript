// Person Constructor

function Person( name , dob ) {
    this.name = name;
    this.birthday = new Date(dob);

    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const person = new Person('Sourav');
// const person2 = new Person('YOYO');

// console.log(person.name);
// console.log(person2.name);
// console.log(person.name);

const sourav = new Person('Sourav','01-12-2002')
console.log(sourav.calculateAge());
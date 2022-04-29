const person = {
    firstName: "Sourav",
    lastName: 'Dubey',
    age: 20,
    email_id : 'skdlp2000@gmail.com',
    address: {
        city: 'Hyderabad',
        country: 'India'
    },
    getBirthYear: function() {
        return 2022 - this.age;
    }
}

let val;

val = person.firstName;
val = person['firstName'];
val = person.email_id;
val = person.age;
val = person.address.country;
val = person.getBirthYear();
console.log(val);

const people = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Hehehe',
        age: 30
    }
];

// console.log(people[1]);

for ( let i = 0 ; i < people.length ; i++ ) {
    console.log(people[i]);
}
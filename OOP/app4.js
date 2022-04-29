// Person Constructor

function Person( firstName , lastName  ) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting

Person.prototype.greeting = function (){
    return `Hello there! ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Sourav','Dubey');
// console.log(person1.greeting());

// Customer Constructor

function Customer ( firstName , lastName , phone , membership ) {

    Person.call( this, firstName , lastName );
    this.phone = phone;
    this.membership = membership;

}

// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer()
Customer.prototype.constructor = Customer();

const customer1 = new Customer('Sourav' , 'Dubey' , '8790586099' , 'Standard');

console.log(customer1);

// Customer greeting

Customer.prototype.greeting= function() {
    return `Hello there! Welcome ${this.firstName} ${this.lastName}`; 
}

console.log(customer1.greeting());
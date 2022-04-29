//  for loop

/*for ( let i = 0 ; i < 5 ; i += 1 ) {

    if ( i ===  0 ) continue;
    else if ( i == 4 ) break;
    console.log(i);

}*/

// while loop

/*let i = 0;

while ( i < 5 ) {
    console.log(i);
    i += 1;
}*/

// do while

/*let i = 0;

do {
    console.log(i);
    i += 1;
} while( i < 5 );
*/

const cars = ['ford','bmw','honda'];

/*for ( let i = 0 ; i < cars.length ; i++ ) {
    console.log(cars[i]);
}*/

// forEach : another way to loop through array - recommended

/*cars.forEach(function(car){
    console.log(car);
})*/

/*
cars.forEach(function(car,index){
    console.log(`${index} : ${car}`);
})
*/

// map

/*
 const users = [
    {id:1 , name: 'Sourav'},
    {id:2 , name: 'Shubham'},
    {id:3 , name: 'Gaurav'}
]

const ids = users.map(function(user){
    return user.id;
})

console.log(ids);
*/

// for in loop
/*
const user = {
    firstName : "Sourav",
    lastName : "Dubey",
    age : 22
}

for ( let x in user ) {
    console.log( `${x} :  ${user[x]}` );
}
*/


// async function myFunc() {
//     // return 'Hello';

//     const promise = new Promise( ( resolve , reject ) => {
//         setTimeout( () => resolve('Hello') , 1000);
//     })

//     const error = false;

//     if ( error ) {

//         await Promise.reject( new Error('something went wrong') );

//     } else {

//         const res = await promise; // Wait until promise is resolved 
//         return res;

//     }

// }

// myFunc().then(res => console.log(res)).catch(err => console.log(err))

async function getUsers () {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // only proceed once its resolved
    const data = await response.json();
    // only proceed when 2nd promise is resolved
    return data;
}

getUsers().then((users) => console.log(users));
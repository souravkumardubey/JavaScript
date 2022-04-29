// document.getElementById('button1').addEventListener('click',getText);

// document.getElementById('button2').addEventListener('click',getJson);

// document.getElementById('button3').addEventListener('click',getExternal);


// function getText() {
//     fetch('text.txt').then(
//         function( response ) {
//             return response.text();
//         }
//     ).then( function(data) {
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch( function(err) {
//         console.log(err);
//     } );
// }

// // Get local JSON data
// function getJson() {
//     fetch('post.json').then(
//         function( response ) {
//             return response.json();
//         }
//     ).then( function(data) {
//         console.log(data);
//         let output = '';
//         data.forEach( function( post ) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
//     .catch( function(err) {
//         console.log(err);
//     } );
// }

// // Get from external API
// function getExternal() {
//     fetch('https://api.github.com/users').then(
//         function( response ) {
//             return response.json();
//         }
//     ).then( function(data) {
//         console.log(data);
//         let output = '';
//         data.forEach( function( user ) {
//             output += `<li>${user.login}</li>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     })
//     .catch( function(err) {
//         console.log(err);
//     } );
// }

// Using Arrow Functions
document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJson);

document.getElementById('button3').addEventListener('click',getExternal);


function getText() {
    fetch('text.txt').then(
        response => response.text()
    ).then( data => {
        document.getElementById('output').innerHTML = data;
    })
    .catch( err => console.log(err) );
}

// Get local JSON data
function getJson() {
    fetch('post.json').then(
        response => response.json()
    ).then( data => {
        console.log(data);
        let output = '';
        data.forEach( function( post ) {
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch( err => console.log(err) );
}

// Get from external API
function getExternal() {
    fetch('https://api.github.com/users').then(
        response => response.json()
    ).then( function(data) {
        console.log(data);
        let output = '';
        data.forEach( user => {
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch( err => console.log(err) );
}
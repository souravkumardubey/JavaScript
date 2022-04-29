const posts = [
    { title: 'Post One', Body: 'This is post one' },
    { title: 'Post Two', Body: 'This is post two' }
];

// function createPost (post) {
//     setTimeout(function(){
//         posts.push(post)
//     } , 2000);
// }

// function getPosts() {
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPost({title: 'Post Three', body: 'this is body three'});

// getPosts(); 

function createPost (post) {

    return new Promise( function( resolve , reject ) {
        setTimeout(function(){
            posts.push(post);
            let error = false;
            if ( error ) {
                reject('error! something is wrong');
            } else {
                resolve();
            }
        } , 2000);
    } );

}

function getPosts() {
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

createPost({title: 'Post Three', body: 'this is body three'}).then(getPosts).catch(function(error){
    console.log(error);
})
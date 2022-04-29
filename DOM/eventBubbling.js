//  event bubbling

document.querySelector('.card-title').addEventListener('click',function(){
    console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click',function(){
    console.log('card-content');
});

// event deligation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click',deleteItem); // only the first cross works

document.body.addEventListener("click",deleteItem);

function deleteItem(e) {

    // console.log(e.target)

    // the below one searches for the whole string of class

    // if ( e.target.parentElement.className == 'delete-item secondary-content' ) {
        
    //     console.log('delete-item');
    // }

    // better way to access parent element of the above one
    if ( e.target.parentElement.classList.contains('delete-item') ) {
        
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }
}
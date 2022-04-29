// document.querySelector('.clear-tasks').addEventListener('click',
// function(){
//     console.log("Hello World");
// });


document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e) {
    // console.log("Clicked");
    let val;
    val = e;

    // event target elements

    val = e.target;
    val = e.target.id;
    val = e.target.id;
    val = e.target.className;

    // event type

    val = e.type;

    // timestamp

    val = e.timeStamp;
    console.log(val);

}
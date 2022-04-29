document.getElementById('button').addEventListener('click',loadData);

function loadData() {
    // create an XHR object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET','data.txt',true);

    // Optional - Used for loaders / spinners
    xhr.onprogress = function() {
        console.log('READY STATE ' , xhr.readyState);
    }
    
    xhr.onload = function() {
        
        if ( this.status == 200 ) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>Hi, I'm Sourav. ${this.responseText} </h1>`
        }

    }

    // xhr.onreadystatechange = function() {
    //     console.log('Read State' , xhr.readyState);
    //     if ( this.status === 200 && this.readyState === 4 ) {

    //         console.log(this.responseText) ;

    //     }
    // }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses 
    // 200 : 'OK'
    // 403 : 'FORBIDDEN'
    // 404 : 'NOT FOUND'

}
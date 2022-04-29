function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url , callBack) {
    this.http.open('GET',url , true); 

    // it gives error , => ES6 method doesnt give
    // to handle this we declare another variable
    let self = this;

    this.http.onload = function() {

        if ( self.http.status === 200 ) {

            // console.log(self.http.responseText);
            callBack(null ,self.http.responseText);

        } else {

            callBack("Error : " + self.http.status );

        }
    }
    this.http.send();
}

// Make an HTTP POST request
easyHTTP.prototype.post = function( url , data , callBack ) {
    this.http.open('POST' , url , true);
    this.http.setRequestHeader('Content-Type','application/json')
    let self = this;

    this.http.onload = function() {

        callBack(null ,self.http.responseText);

    }
    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT request
easyHTTP.prototype.put = function( url , data , callBack ) {
    this.http.open('PUT' , url , true);
    this.http.setRequestHeader('Content-Type','application/json')
    let self = this;

    this.http.onload = function() {

        callBack(null ,self.http.responseText);

    }
    this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url , callBack) {
    this.http.open('DELETE',url , true); 

    // it gives error , => ES6 method doesnt give
    // to handle this we declare another variable
    let self = this;

    this.http.onload = function() {

        if ( self.http.status === 200 ) {

            // console.log(self.http.responseText);
            callBack(null , 'Post Deleted');

        } else {

            callBack("Error : " + self.http.status );

        }
    }
    this.http.send();
}


// AJAX
// ASYNC js and XML


// Objectives
//     [] Make an AJAX request
//     []Understand server status code
//     []Handle AJAX resonses


//XHR
// const request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//     console.log(this)
// };


// request.open("GET", "https://placekitten.com/400/400");

// const requestBTN = document.getElementById("requestBTN")
// requestBTN.addEventListener("click", function(){
//     request.send();
// });

/**
 * Request METHODS
 *      -GET   : getting data from server
 *      -POST  : sending data to server
 *      -PATH  : sending UPDATED data/information
 *      -DELETE: deletes data 
 */

/**
 * STATUS CODES
 * -100s Info
 *  -200s Sucess
 *  -300s Redirects
 *  -400s Client Error
 *  -500s Server Error
 */



// fetch("http://placekitten.com/400/400")
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.log(error);
// })




// Making AJAX request using XMLHttpRequest object:
const request = new XMLHttpRequest();
// there is an event listening property on the object 
// above called 'onReadyStateChange' this will be triggered
// every time the request updates the browser

request.onreadystatechange = function(){
    if(this.readystate === 4 && this.status === 200){   //checking to see if ready state is finished and response is ready
        console.log(this)
    }
};
// note: "this" refers to the XMLHttpRequest object

// Now, we have the event listener defined, we have to specify
// what kind of request method we want to use: GET/POST/PATH/DELETE

//You initialize the HTTP response method using the open() function.
//first argument is the method type^, second argument is the URL to the response.

request.open("GET", "./sample.txt");

//Now, we call the send() function to execute the request.
request.send();

// Here is an example of the same AJAX request, but with fetch()
fetch('./sample.txt').then((response)=>{
    console.log(response);
});
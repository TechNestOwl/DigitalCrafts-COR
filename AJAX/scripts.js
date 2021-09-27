// AJAX
// ASYNC js and XML


// Objectives
//     [] Make an AJAX request
//     []Understand server status code
//     []Handle AJAX resonses


//XHR
const request = new XMLHttpRequest();

request.onreadystatechange = function () {
    console.log(this)
};


request.open("GET", "https://placekitten.com/400/400");

const requestBTN = document.getElementById("requestBTN")
requestBTN.addEventListener("click", function(){
    request.send();
});

/**
 * Request METHODS
 *      -GET   : getting data from server
 *      -POST  : sending data to server
 *      -PATH  : sending UPDATED data/information
 *      -DELETE: deletes data 
 */

/**
 * STATUS CODES
 *  -100s Info
 *  -200s Sucess
 *  -300s Redirects
 *  -400s Client Error
 *  -500s Server Error
 */


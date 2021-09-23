/*
The addEventListener() method attaches an event handler to the specified element.

The addEventListener() method attaches an event handler to an element without
overwriting existing event handlers.

EX:  document.getElementById("myBtn").addEventListener("click", displayDate);
*/



// Change text to blue
function blueFunction() {
    let x = document.getElementById("dyno");

    x.style.color = "blue"
    x.innerHTML="I am blue now";
    // alert("Success!");
};

// Change text to red
function redFunction() {
    let x = document.getElementById("dyno");

    x.style.color = "red";
    x.innerHTML="I am red now";
    // alert("Success!");
};

document.getElementById("blue-btn").addEventListener("click", blueFunction );
document.getElementById("red-btn").addEventListener("click", redFunction );

function myFunc(x){
    x.style.background="orange";
};

// document.getElementById("focusInput").addEventListener(onchange, function(){
//     this.style.bakckground="white";
// } )

// BOM - Browser Object Model

window.addEventListener('resize', function(){
    console.log(window.innerWidth);
})
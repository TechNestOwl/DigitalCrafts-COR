/*
The addEventListener() method attaches an event handler to the specified element.

The addEventListener() method attaches an event handler to an element without
overwriting existing event handlers.

EX:  document.getElementById("myBtn").addEventListener("click", displayDate);

*/
function blueFunction() {
    document.getElementById("dyno").style.color = "blue";
    alert("Text is now blue");
};

document.getElementById("blue-btn").addEventListener("click", blueFunction );

const btn = document.getElementById("add-btn");

const input = document.getElementsByTagName("input")[0];
console.log(input);

btn.addEventListener("click", function(event){
    // console.log(input.value);
    let item = document.createElement("li")
    item.innerHTML = input.value;

    console.log(item);

}); 
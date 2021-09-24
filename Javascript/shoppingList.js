let input = document.getElementsByTagName("input")[0];
let submitButton = document.getElementsByTagName('button')[0];
let itemsList=document.createElement("ul");
let title = document.getElementsByTagName("h1")[0];
let removeButton = null
itemsList.setAttribute("id","items")

title.insertAdjacentElement("afterend",itemsList);

submitButton.addEventListener("click",function(event){
    let item=document.createElement("li")
    item.innerHTML=input.value;
    removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button");
    removeButton.innerHTML ="remove"
    item.append(removeButton)
    itemsList.appendChild(item);
    input.value = "";
})
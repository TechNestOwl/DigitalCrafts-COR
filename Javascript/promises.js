const myList = document.querySelector('ul');
const myRequest = new Request('products.json');
fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const product of data.products) {
      let listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = product.Name;
      listItem.append(
        ` can be found in ${
          product.Location
        }. Cost: `
      );
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `£${product.Price}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);

fetch('https://anapioficeandfire.com/api/characters/583')
.then(response => response.json())
.then(data => console.log(data.name))
/**
 * 1)   Make get request with fetch
 * 2)   That request returns a Promise
 * 3)   Then... once it resolves successfully run the first function passed
 * 4)   Inside that function, parse the expected text response, which returns 
 *      a Promise as well
 * 5)   Then (again)... once that Promise resolves successfully, log the result
 *      that in this case I called Data
 * 
 * ***  NOTES:  The result of the Promise gets passed into the function automatically.
 * ***          Also, if you're fetching a local file like this you'll need to run your
 *              project directory as a local server. I will show you how you can do this.
 *              In the mean time, try doing the assignments releated to the external API.
 */ 
 fetch(`sample.txt`)
 .then(function(response) {
    return response.text();
 })
 .then(function(data) {
     console.log(data);

 })


fetch("samp.txt")
.then(response => response.text())


// function whatsYourName(name){
//     return name
// };

whatsYourName = (name) => console.log(name)


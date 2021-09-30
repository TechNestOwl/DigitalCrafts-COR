// create function that takes in an integer and convert it to seconds

function convertToSeconds(minute){
    let seconds = minute * 60;
    console.log(`${minute} minutes has ${seconds} seconds in it.`);
    return seconds;
}
convertToSeconds(2);

function addUp(num) {
    return (num * (num + 1));
  }
console.log(addUp(4));

dranks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "Old-Fashioned", price: 30}
];

function sortDrinkByPrice(arr){
	const sorted = arr.sort(function(a, b){
    return a.price - b.price;
	});
    console.log(sorted);
	return sorted;
}

sortDrinkByPrice(dranks);

function reverseString(str) {
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    return joinArray; // "olleh"
}
 
reverseString("hello");



let sumArray = (ar) => {
    let sum = 0;
    for(let i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    return sum;
}

const ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// var sum = sumArray(ar);
console.log(sumArray(ar));
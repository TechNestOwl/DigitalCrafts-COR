// create function that takes in an integer and convert it to seconds


// function convertToSeconds(minute){
//     let seconds = minute * 60;
//     console.log(`${minute} minutes has ${seconds} seconds in it.`);
//     return seconds;
// }
// convertToSeconds(2);

// function addUp(num) {
//     return (num * (num + 1));
//   }
// console.log(addUp(4));

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
];

function sortDrinkByPrice(drinks){
	const sorted = drinks.sort(function(a, b){
    return a.price - b.price;
	});
	return sorted;
}
// This is an example of an IIFE, a self/immediate invoked funcion. (pronounced "iffy")
(function test() {
    console.log("Hello World");
})();

console.log(typeof typeof true); // returns "string"

person = {
    name:"John",
    age: 27,
    interests: ['snowboarding','hiking'],
    bio:function(){
        console.log(this.interests[1]) //return 'hiking'
    },
};

console.log(person.bio())

function foo(){
    const x = "fooScope"
    function closure(){
        console.log(x)
    }
    closure();
};
foo();

(()=> console.log("hello"))(); // anonymous self calling function IFFY

const arry1 = ['a','b','c',4]

// maping through an array:

const numbers = [1,-1,-10,2,3];

const filtered = numbers.filter(n => n >= 0);//filters out the negative numbers

const listItemas = filtered.map(n => '<li>' + n + '</li>');

//combines the itmes in the list. The empty ('') seperates the items with an empty character. As opposed to the defualt comma. 
const html = '<ul>' + listItemas.join('') + '</ul>';

function newFilter(){
    console.log("this is a new filter for the array")
    let x = 20;
}

console.log(html);

// creating and mappig through an array
let arry2 = [1,2];
console.log(arry2);

let newArray = arry2.map(i => i + 1);
console.log(newArray+ " post \"edit\"");

// ASYNC - performing "non-deterministic" operations
// network request to a sever to return more data. 
// we don't know when the request is going to return, or if it's going to fail.
// So we have to handle both of those cases. 

async function getAsync(URL) {
    const reaponse = await fetch(URL) //await is the keyword
};

// Typescript - while not technically JAVASCRIPT, Typescript compiles into normal JS
// vanilla js has dynamic typing, TS has static typing


// Passing by reference, passing by value
let y = 234;
let x = y;
y = 11;
console.log(y,x);

// From the above example, we can see that primitive data types when passed 
// to another variable, are passed by value. Instead of just assigning the same 
// address to another variable, the value is passed and new space of memory is created.

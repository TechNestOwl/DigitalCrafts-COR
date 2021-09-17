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



console.log(html);
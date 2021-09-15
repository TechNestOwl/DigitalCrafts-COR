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





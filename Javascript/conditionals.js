let age = 19;

if (age >= 21) {
    console.log("youre over 21")
} else if (age >= 18){
    console.log("between 18-20")
}else{
    console.log('bye felicia...')
}

switch (age) {
    case (age >= 21):
        console.log("you're over 21");
        break;
    case (age >= 18):
        console.log("you're not old enough");
        break;
    default:
        console.log("not even close.");
        break;
};

// For Loop: variable value | condition | iterator
for(x = 0; x < 10; x++){
    console.log(x)
};


// While Loop: get a value, check condition, if true, execute code block, iterate
let b = 0;
while(b < 20){
    console.log(b)
    b = b +2;
}
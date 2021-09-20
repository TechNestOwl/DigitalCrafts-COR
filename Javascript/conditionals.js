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


function madLib(name, subject){
    let response = `${name}'s favorite subject in school is ${subject}`;
    return response;
};
let student1 = madLib("Jackie", "Art");
console.log(student1);


// Tip Calculator

function tipCalc(price, service){
    if(service == "good"){
        tipAmount = price*.2;
        return("$"+tipAmount + " is your tip amount")
    }else if (service == "okay"){
        tipAmount = price*.15;
        return(`$${tipAmount} is your tip amount`)
    }else if (service == "fair"){
        tipAmount = price*.1;
        return("$"+tipAmount + ", appropriate tip for poor service")
    } else {
        return "Dine & Dash B****!"
    }
};

let payOut = tipCalc(100,"okay");

console.log(payOut);
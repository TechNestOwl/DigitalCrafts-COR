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
}
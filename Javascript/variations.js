import {getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized} from "./variations.js";

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");

const name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getNumberOfChars(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
});

export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length
}

export function getFirstChar(name) {
    // first character of: name
    return name[0];
}

export function getLastChar(name) {
    // last character of: name
    return name[name.length -1];
}

export function getLower(name) {
    // name all in lower case 
    return name.toLowerCase();

}

export function getUpper(name) {
    // name all in upper case 
    return name.toUpperCase();
}

export function getCapitalized(name) {
    // capitalized version of name 

    return name[0].toUpperCase() + name.substring(1).toLowerCase();

}

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

// ASSIGNMENT RECAP:

/* You can create strings with " or '

.length is a property that gives you the length of a string

.toUpperCase() is a function that converts the string to upper case

.toLowerCase() is a function that converts the string to lower case

parentheses () on functions are required. .length is a property that is already pre-computed; therefore, it does not need parentheses.

console.log(...) is used for debugging and is NOT a replacement for return.

Square brackets [index] are used to access a specific index from a string

The index starts at 0. So the first character is index 0

You can combine it with the length of a string to get another character in another position

A substring is a part or a portion of a string.

string.substring(indexStart, indexEnd) is used to return a portion of the string.

indexStart: the position of the first character you'd like to include.

indexEnd: the position of the first character you'd like to ignore.

the indexEnd argument is optional which means you can leave it out.

The + operator is used to add 2 numbers

The + operator is used to concatenate 2 strings

A template string is a string created with the backtick character: `

Template strings can span multiple lines

Template strings support interpolation with the ${variableName} syntax
*/
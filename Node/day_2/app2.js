// program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.


const fs = require("fs");
const rl = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('filename: ', (filename) => {
    rl.close();
    fs.readFile(filename, (error, buffer) => {
        if (error) {
            console.log(error.message);
            return;
        }
        const content = buffer.toString();
        const upperCased = content.toUpperCase();
        console.log(upperCased);
    });
});
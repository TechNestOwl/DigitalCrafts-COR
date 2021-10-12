const fs = require("fs");
const rl = require("readline").createInterface((inputFile) => {
    fs.readFile(inputFile, (error, buffer) => {
        if (error) {
            console.log(error.message);
            rl.close();
            return;
        }
        rl.question("Output file: ", (outputFile) => {
            rl.close();
            const content = buffer.toString();
            const upperCased = content.toUpperCase();
            fs.writeFile(outputFile, upperCased, (error) => {
                if (error) {
                    console.log(error.message);
                    return;
                }
                console.log("Wrote to file", outputFile);
            })
        })
    }) 
})
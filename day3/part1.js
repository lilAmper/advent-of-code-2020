const fs = require("fs");

const inputs = fs.readFileSync('./inputs.txt', 'utf8');
const inputLine = inputs.split('\r\n');
let count = 0;

/*
    Right 1, down 1.
    Right 3, down 1. (This is the slope you already checked.)
    Right 5, down 1.
    Right 7, down 1.
    Right 1, down 2.
*/

for (i = 1, x = 3; i < inputLine.length; i += 1, x += 3) {
    const inputId = inputLine[i];
    if (inputId[x % inputId.length] !== '.')
        count++
}
console.log(count);
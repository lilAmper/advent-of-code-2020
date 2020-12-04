const fs = require('fs');

const inputs = fs.readFileSync('./inputs.txt', 'utf-8');
const inputLine = inputs.split('\n');

let inputArray = [];

inputLine.forEach((line) => {
    let [space, letter, password] = line.split(' ');
    let [min, max] = space.split('-');

    let count = password.match(new RegExp(letter.replace(/.$/, ''), 'gi'));
    count !== null ? count = count.length : count = 0;
    if (min <= count && count <= max) {
        inputArray.push(password);
    }
});

console.log(inputArray.length);
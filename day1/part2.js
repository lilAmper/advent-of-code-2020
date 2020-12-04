const fs = require("fs");
const puzzles = fs.readFileSync("C:/Users/gurka/Desktop/advent-of-code-2020/day1/puzzles.txt", "utf-8");

const puzzlesLine = puzzles.split('\n').map(function (item) {
    return parseInt(item, 10);
});

for (let i = 0; i < puzzlesLine.length; i++) {
    for (let x = i; x < puzzlesLine.length; x++) {
        for (let j = x; j < puzzlesLine.length; j++) {
            if (i !== x !== j && puzzlesLine[i] + puzzlesLine[x] + puzzlesLine[j] == 2020) {
                const result = puzzlesLine[i] * puzzlesLine[x] * puzzlesLine[j];
                console.log(result);
            }
        }
    }
};
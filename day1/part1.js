const fs = require("fs");
const puzzles = fs.readFileSync("C:/Users/gurka/Desktop/advent-of-code-2020/day1/puzzles.txt", "utf-8");

const puzzlesLine = puzzles.split('\n').map((item) => {
    return parseInt(item, 10);
});

for (let i = 0; i < puzzlesLine.length; i++) {
    for (let x = i; x < puzzlesLine.length; x++) {
        if (i !== x && puzzlesLine[i] + puzzlesLine[x] == 2020) {
            const result = puzzlesLine[i] * puzzlesLine[x];
            console.log(result);
        }
    }
};
const fs = require("fs");

const inputs = fs.readFileSync("./inputs.txt", "utf-8");
const inputLine = inputs.split('\r\n\r\n')
    .map(i => i.split("\r\n")
        .sort((f, x) =>
            f.length - x.length
        ));


let count = 0;
inputLine.forEach((x) => {
    count += [...new Set(x.join("").split(""))].length;
});

console.log(count);
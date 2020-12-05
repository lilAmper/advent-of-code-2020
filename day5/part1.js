const fs = require("fs");


const inputs = fs.readFileSync("./inputs.txt", "utf8");
const inputLine = inputs.split("\n");
const data = inputLine.map(DataToBString).map(Int);

console.log(Math.max(...data));

function DataToBString(data) {
    return data.replace(/[B,R]/g, "1").replace(/[F,L]/g, "0");
}

function Int(i) {
    return parseInt(i, 2);
}
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var flightBags = {};
var inputs = fs.readFileSync('inputs.txt', 'utf-8');
var inputLine = inputs.split('\n');
var RegexI = /^([a-z]+ [a-z]+) flightBags/;
var RegexII = /(\d) ([a-z]+ [a-z]+) flightBags?/g;
inputLine.forEach(function (line) {
    var match1 = RegexI.exec(line);
    var type = match1[1];
    var contents = {};
    flightBags[type] = contents;
    var match2 = RegexII.exec(line);
    while (match2) {
        var count = parseInt(match2[1]);
        var type_1 = match2[2];
        contents[type_1] = count;
        match2 = RegexII.exec(line);
    }
});
function WhereMyFuckingShinyGoldBro(flightBags, type) {
    if (flightBags["shiny gold"]) {
        return true;
    }
    return Object.keys(flightBags[type]).some(function (type) {
        return WhereMyFuckingShinyGoldBro(flightBags, type);
    });
}
console.log(Object.keys(flightBags).filter(function (type) { return WhereMyFuckingShinyGoldBro(flightBags, type); }).length);
//# sourceMappingURL=part1.js.map
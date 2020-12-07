import * as fs from 'fs';

type FlightBagsData = Record<string, Record<string, number>>;
const flightBags: FlightBagsData = {};
const inputs = fs.readFileSync('inputs.txt', 'utf-8');
const inputLine = inputs.split('\n');

const RegexI = /^([a-z]+ [a-z]+) flightBags/;
const RegexII = /(\d) ([a-z]+ [a-z]+) flightBags?/g;

inputLine.forEach((line) => {
    const match1 = RegexI.exec(line);

    const type = match1[1];
    const contents: Record<string, number> = {};

    flightBags[type] = contents;

    let match2 = RegexII.exec(line);

    while (match2) {
        const count = parseInt(match2[1]);
        const type = match2[2];

        contents[type] = count;

        match2 = RegexII.exec(line);
    }
});

function WhereMyFuckingShinyGoldBro(flightBags: FlightBagsData, type: string): boolean {
    if (flightBags["shiny gold"]) {
        return true;
    }

    return Object.keys(flightBags[type]).some((type) => {
        return WhereMyFuckingShinyGoldBro(flightBags, type);
    });
}

console.log(Object.keys(flightBags).filter((type) => { return WhereMyFuckingShinyGoldBro(flightBags, type); }).length);
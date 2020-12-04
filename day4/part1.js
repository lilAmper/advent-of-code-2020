/*

im a little ridiculous because i fucked my brain at 6 a.m.


const fs = require('fs');

const inputs = fs.readFileSync('./inputs.txt', 'utf8');
const inputLine = inputs.split('\n');

let passaports = [];
let dataArray = {};


for (const line of inputLine) {
    dataArray = {};
    const allData = line.split(' ');

    for (const pair of allData) {
        let kv = pair.split(':');

        dataArray[kv[0]] = kv[1];
    }
    passaports.push(dataArray);
}*/

const fs = require('fs');

const inputs = fs.readFileSync('./inputs.txt', 'utf8').split('\n').map((line) => line.trim()).join('\n');

function validatePassport(data) {

    /*
        byr (Birth Year)
        iyr (Issue Year)
        eyr (Expiration Year)
        hgt (Height)
        hcl (Hair Color)
        ecl (Eye Color)
        pid (Passport ID)
        cid (Country ID)
    
        passaports(on AoC example):
        ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
        byr:1937 iyr:2017 cid:147 hgt:183cm

        iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
        hcl:#cfa07d byr:1929

        hcl:#ae17e1 iyr:2013
        eyr:2024
        ecl:brn pid:760753108 byr:1931
        hgt:179cm

        hcl:#cfa07d eyr:2025 pid:166559648
        iyr:2011 ecl:brn hgt:59in
    */

    let requiredData = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];
    let passportData = data
        .split('\n')
        .join(' ')
        .split(' ')
        .map((f) => /(\w+):/.exec(f)[1]
        );

    return requiredData.every((f) => passportData.includes(f));
}

console.log(inputs.split(/\n{2,}/g).filter(validatePassport).length);
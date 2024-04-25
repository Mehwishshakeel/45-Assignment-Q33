"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creating array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using for loop
for (let oneNumber of numbers) {
    let ordinal_ending;
    if (oneNumber === 1) {
        ordinal_ending = "st";
    }
    else if (oneNumber === 2) {
        ordinal_ending = "nd";
    }
    else {
        ordinal_ending = "th";
    }
    console.log(`${oneNumber}${ordinal_ending}`);
}

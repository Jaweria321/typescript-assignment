"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    console.log(magicians);
}
function make_great(magicians) {
    //const great_magicians: string[] = magicians.map(mag => " The Great " + mag );
    return magicians.map(mag => " The Great " + mag);
}
const magicians = ["magician 1", "magician 2", "magician 3", "magician 4"];
const great_magicians = make_great(magicians);
console.log("Array of original names");
show_magicians(magicians);
console.log("Array with the Great added to each magician’s name");
show_magicians(great_magicians);

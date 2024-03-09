"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name. Call show_magicians()
 to see that the list has actually been modified. */
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    console.log(magicians);
}
function make_great(magicians) {
    const great_magicians = magicians.map(mag => " The Great " + mag);
    show_magicians(great_magicians);
}
const magicians = ["magician 1", "magician 2", "magician 3", "magician 4"];
make_great(magicians);

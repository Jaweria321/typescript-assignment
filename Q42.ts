/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name. Call show_magicians() 
 to see that the list has actually been modified. */

function show_magicians(magicians: string[]) {
	console.log(magicians);
}
function make_great(magicians: string[])  {
	const great_magicians: string[] = magicians.map(mag => " The Great " + mag );
    show_magicians(great_magicians);
}


const magicians: string[] = ["magician 1", "magician 2","magician 3","magician 4"];
make_great(magicians);

export {};
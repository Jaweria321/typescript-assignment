// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.
let full_name = "Jaweria ehsan";
console.log(full_name.toUpperCase()); //uppercase
console.log(full_name.toLowerCase()); //lowercase

// titlecase
const full_name_array: string[] = full_name.split(" ");
const full_name_titlecase: string[]  = full_name_array.map(s => s.charAt(0).toUpperCase().concat(s.slice(1)));
console.log(full_name_titlecase.join(" "));
export {};
// Q32 Checking Usernames: Do the following to create a program that 
// simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
const current_users: string[] = ["Jaweria", "Ehsan Ullah","Bilal", "Sabahat", "Meer"];
// • Make another list of five usernames called new_users. Make sure one or two
//  of the new usernames are also in the current_users list.
const new_users: string[] = [ "Naseem","JAweria","Bilal", "Atiq", "Ayesha"];
// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available.
const lowercase_current_users = current_users.map(c_user => c_user.toLowerCase());
new_users.map(user => lowercase_current_users.includes(user.toLowerCase()) ? console.log("You need to enter a new username.") : console.log("Username is available." ));

// Q33 Ordinal Numbers: Ordinal numbers indicate their position in a array, 
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
const ordinal_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for( let i=0; i < ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] === 1) {
        console.log(`${ordinal_numbers[i]}st`);  
    } else if(ordinal_numbers[i] === 2) {
        console.log(`${ordinal_numbers[i]}nd`);
    }
    else if(ordinal_numbers[i] === 3) {
        console.log(`${ordinal_numbers[i]}rd`);
    } else {
        console.log(`${ordinal_numbers[i]}th`);
    }
}
// Q34 Pizzas: Think of at least three kinds of your favorite pizza. 
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.

const favorite_pizza: string[] =["Fajita", "Tikka", "Butter Chicken"];
for(let i = 0; i< favorite_pizza.length; i++) {
    console.log(`I like ${favorite_pizza[i]} pizza.`);
    
}
console.log("I like all these pizza flavors because I like to eat pizza and its the go to meal for me due to the convenience to eat it. I really love pizza!");



// Q35 Animals: 
const animals:string[] = ["Goat", "Cat", "Dog"];
animals.map(animal => console.log(`A ${animal} would make a great pet`));
console.log("Any of these animals would make a great pet!");

// Q36 T-Shirt: Write a function called make_shirt() that accepts a size and 
// the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt
//  and the message printed on it. Call the function.

/*
*************************

function make_shirt(size: string, text: string) {
    console.log(`This is ${size} shirt with text: ${text}`);
}
make_shirt("Large", "Good Day");

 */
// Q37
function make_shirt(size: string="Large", text: string="I love TypeScript") {
    console.log(`This is ${size} shirt with text: ${text}`);
}
make_shirt(); // by default large shirt
make_shirt("Medium"); 
make_shirt("Small", "Enjoy the Day!"); 

// Q38
// Cities:
function describe_city(city: string, country: string = "Pakistan"){
console.log(`${city} is in ${country}. `);
}
describe_city("Sialkot");
describe_city("Lahore");
describe_city("Makkah", "Saudi Arabia");
// Q39 
// City Names:
function city_country(city: string, country: string) : string{
    return `${city}, ${country}`;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Makkah", "Saudi Arabia"));
console.log(city_country("Madinah", "Saudi Arabia"));


// Q 40 
function make_album(artist_name : string, album_title: string, number_of_tracks?: number ): object {
	const music_album : {"Artist name" : string, "Album Title": string, tracks?: number } =  {
    	"Artist name": artist_name,
        "Album Title": album_title
    }
    if(number_of_tracks){
    	music_album["tracks"] = number_of_tracks;
    }
    
    return music_album;
}

console.log(make_album("abc", "xyz"));
console.log(make_album("abc", "xyz"));
console.log(make_album("abc", "xyz",45));

export {};
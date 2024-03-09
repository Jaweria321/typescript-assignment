// Q11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

const friendsNames= ["Amina", "Aqsa", "Ayesha", "Lareeb", "Nimra"];
console.log(friendsNames[0]);
console.log(friendsNames[1]);
console.log(friendsNames[2]);
console.log(friendsNames[3]);
console.log(friendsNames[4]);


// Q12 
for (let i=0; i<5; i++) {
    console.log(`God bless you ${friendsNames[i]}`);
}

// Q13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle 
// or a car, and make a list that stores several examples. Use your list to print a series 
// of statements about these items, such as “I would like to own a Honda motorcycle.”

// let ['fortuner',]
// Q14
// Guest List
const guestList = ["Amina", "Aqsa", "Ayesha"];
for (let i = 0; i< guestList.length; i++) {
    console.log(`${guestList[i]} you are invited for dinner tonight`);
}
// Q15 
console.log(`${guestList[2]} is not coming for dinner for personal reason`);
// new guest
guestList[2] = "Nimra";
// new guest list invitation messages
for (let i = 0; i< guestList.length; i++) {
    console.log(`${guestList[i]} you are invited for dinner tonight`);
}


// Q16 More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
console.log("Friend now I have big dinner table");

// Add one new guest to the beginning of your array
guestList.unshift("Memona");

// Add one new guest to the middle of your array
guestList.splice(2, 0, "Aiman");

// Use append() to add one new guest to the end of your list.
guestList.push("Khansa");

// Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i< guestList.length; i++) {
    console.log(`${guestList[i]} you are invited for dinner tonight`);
}


// Q17 shrinking Guest List:

console.log("Sorry friend I can invite only two people for dinner.");

// Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.

while (guestList.length > 2) {
    console.log(`${guestList.pop()} sorry I can’t invite you to dinner`);
}

// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i< guestList.length; i++) {
    console.log(`${guestList[i]} you are still invited for dinner tonight`);
}
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
// have an empty list at the end of your program.
while (guestList.length > 0) {
    console.log(`${guestList.pop()} sorry I can’t invite you to dinner`);
}

console.log("Guest list");
for (let i = 0; i< guestList.length; i++) {
    console.log(guestList[i]);
}



// Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
let seeingTheWorld  = ["Saudi Arabia", "China","Japan","vanice", "Seychelles"];

//  Print your array in its original order.
console.log("Array in its original order");
console.log(seeingTheWorld.map(arrayElement => arrayElement));
// Print your array in alphabetical order without modifying the actual list
console.log("Array in alphabetical order without modifying the actual list");
// let seeingTheWorld1 = [...seeingTheWorld].sort();
// for (let i = 0; i< seeingTheWorld1.length; i++) {
//     console.log(seeingTheWorld1[i]);
// }
console.log([...seeingTheWorld].sort().map(arrayElement => arrayElement));
// Show that your array is still in its original order by printing it.
console.log("Array in its original order");
console.log(seeingTheWorld.map(arrayElement => arrayElement));
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Array in reverse alphabetical order without modifying the actual list");
console.log([...seeingTheWorld].sort().reverse().map(arrayElement => arrayElement));
// Show that your array is still in its original order by printing it again.
console.log("Array in original order");
console.log(seeingTheWorld.map(arrayElement => arrayElement));

// Reverse the order of your list. Print the array to show that its order has changed
console.log("Array in reverse order original array is modified");
console.log(seeingTheWorld.reverse().map(arrayElement => arrayElement));
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Array in reverse order again in original order");
console.log(seeingTheWorld.reverse().map(arrayElement => arrayElement));

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Array is stored in alphabetical order");

console.log(seeingTheWorld.sort().map(arrayElement => arrayElement));
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Array is stored in reverse alphabetical order");
console.log(seeingTheWorld.reverse().map(arrayElement => arrayElement));

// Q19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// as per exercise 14 
const guestList1 = ["Amina", "Aqsa", "Ayesha"];
console.log(`${guestList1.length} guests are invited for dinner`);


// Q20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
//  Write a program that creates a list containing these items.
const listOfTasks =["Do code", "Make dinner", "Solve puzzle"]


export {};
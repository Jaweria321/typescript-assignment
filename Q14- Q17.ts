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
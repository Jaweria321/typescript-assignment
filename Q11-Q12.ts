// Q11
//  Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
const friendsNames= ["Amina", "Aqsa", "Ayesha", "Lareeb", "Nimra"];
console.log(friendsNames[0]);
console.log(friendsNames[1]);
console.log(friendsNames[2]);
console.log(friendsNames[3]);
console.log(friendsNames[4]);

// Q12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing
//  each person’s name, print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
for (let i=0; i<5; i++) {
    console.log(`God bless you ${friendsNames[i]}`);
}
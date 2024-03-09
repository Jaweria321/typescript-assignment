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

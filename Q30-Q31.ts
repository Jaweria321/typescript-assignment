// Q30 Hello Admin: Make a array of five or more usernames,
const usernames: string[] = ["Admin","Jaweria", "Bilal", "Sabahat", "Meer" ];
usernames.map(user => user==="Admin" ? console.log("Hello admin, would you like to see a status report?"):  console.log(`Hello ${user}, thank you for logging in again.`));

// Q31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// removing all users 
usernames.splice(0)
if(usernames.length < 1 ) {
    console.log("We need to find some users!");
    
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
const person = {
    name: "Jaweria Ehsan",
    age: 29,
    gender: "female"
};
// Q22 Intentional Error
// Q25 Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// version of this program that passes 
let alien_color = "green";
if (alien_color === "green") {
    console.log('the player just earned 5 points');
}
else {
}
// // version of this program that fails
alien_color = "red";
if (alien_color === "green") {
    console.log('the player just earned 5 points');
}
else {
}
// Q26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
//  and write an if-else chain.
// let alien_color: string = "green";
// version of this program that runs the if block
alien_color = "green";
if (alien_color === "green") {
    console.log('The player just earned 5 points for shooting the alien');
}
else {
    console.log('The player just earned 10 points');
}
// version of this program that runs the else block
alien_color = "red";
if (alien_color === "green") {
    console.log('The player just earned 5 points for shooting the alien');
}
else {
    console.log('The player just earned 10 points');
}
// Q27 Alien Colors #3:
// let alien_color: string = "green";
// version one of this program
alien_color = "green";
if (alien_color === "green") {
    console.log('The player earned 5 points');
}
else if (alien_color === "yellow") {
    console.log('The player earned 10 points');
}
else if (alien_color === "red") {
    console.log('The player earned 15 points');
}
// version two of this program
alien_color = "yellow";
if (alien_color === "green") {
    console.log('The player earned 5 points');
}
else if (alien_color === "yellow") {
    console.log('The player earned 10 points');
}
else if (alien_color === "red") {
    console.log('The player earned 15 points');
}
// version three of this program
alien_color = "red";
if (alien_color === "green") {
    console.log('The player earned 5 points');
}
else if (alien_color === "yellow") {
    console.log('The player earned 10 points');
}
else if (alien_color === "red") {
    console.log('The player earned 15 points');
}
// Q28 Stages of Life:
let personAge = 1;
if (personAge < 2) {
    console.log("The person is a baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("The person is a teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult");
}
else if (personAge >= 65) {
    console.log("The person is an elder");
}
//Q 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
const favorite_fruits = ["Mango", "Banana", "Grapes"];
// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
//  the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mangos!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Orange!");
}
if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apple!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Bananas!");
}
// Q30 Hello Admin: Make a array of five or more usernames,
const usernames = ["Admin", "Jaweria", "Bilal", "Sabahat", "Meer"];
usernames.map(user => user === "Admin" ? console.log("Hello admin, would you like to see a status report?") : console.log(`Hello ${user}, thank you for logging in again.`));
// Q31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// removing all users 
usernames.splice(0);
if (usernames.length < 1) {
    console.log("We need to find some users!");
}

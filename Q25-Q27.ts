// Q25 Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// version of this program that passes 
let alien_color: string = "green";
if(alien_color === "green") {
    console.log('the player just earned 5 points');
} else {

}
// // version of this program that fails
alien_color= "red";
if(alien_color === "green") {
    console.log('the player just earned 5 points');
} else {

}
// Q26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
//  and write an if-else chain.
// let alien_color: string = "green";
// version of this program that runs the if block
alien_color= "green";
if(alien_color === "green") {
    console.log('The player just earned 5 points for shooting the alien');
} else {
    console.log('The player just earned 10 points');
}
// version of this program that runs the else block
alien_color= "red";
if(alien_color === "green") {
    console.log('The player just earned 5 points for shooting the alien');
} else {
    console.log('The player just earned 10 points');
}

// Q27 Alien Colors #3:
// let alien_color: string = "green";
// version one of this program
alien_color= "green";
if(alien_color === "green") {
    console.log('The player earned 5 points');
} else if(alien_color === "yellow") {
    console.log('The player earned 10 points');
} else if(alien_color === "red") {
    console.log('The player earned 15 points');
}

// version two of this program
alien_color= "yellow";
if(alien_color === "green") {
    console.log('The player earned 5 points');
} else if(alien_color === "yellow") {
    console.log('The player earned 10 points');
} else if(alien_color === "red") {
    console.log('The player earned 15 points');
}
// version three of this program
alien_color= "red";
if(alien_color === "green") {
    console.log('The player earned 5 points');
} else if(alien_color === "yellow") {
    console.log('The player earned 10 points');
} else if(alien_color === "red") {
    console.log('The player earned 15 points');
}
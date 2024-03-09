// Seeing the World: Think of at least five places in the world you’d like to visit.
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

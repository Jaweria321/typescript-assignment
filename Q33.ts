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
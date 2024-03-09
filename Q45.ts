/* Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other 
name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.
*/

function cars(manufacturer: string, model: string, args: any) {
    interface Car {
        [key: string]: any;
      }
    let car : Car= {
        "manufacturer": manufacturer,
        "model": model,
    }
    // const newObject = {...car, ...args};
    car = {...car, ...args};
    // for (let obj in args) { 
    //     car[obj] =  args[obj];
    // }
    console.log(car);
}
cars("manufacturer", "model", {color: "black", speed: "speed"});
export {};
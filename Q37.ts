// Q37
function make_shirt(size: string="Large", text: string="I love TypeScript") {
    console.log(`This is ${size} shirt with text: ${text}`);
}
make_shirt(); // by default large shirt
make_shirt("Medium"); 
make_shirt("Small", "Enjoy the Day!"); 
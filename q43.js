"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magician = ["Harry Houdini", "David Copperfield", " David Blaine", "Uri Geller"];
// Adding " the Great" to each magician's name
function make_great(magicians) {
    return magicians.map(magician => " " + magician + " The Great.");
}
// Displaying each magician's name
function show_magicians(magicians) {
    console.log(magicians.join("\n"));
}
// Make a copy of the original array
const originalMagician = [...magician];
// pass a copy of the array
const GreatMagician = make_great([...magician]);
// one array of original names
show_magicians(originalMagician);
console.log("\n");
// one arry with the great added to each names
show_magicians(GreatMagician);

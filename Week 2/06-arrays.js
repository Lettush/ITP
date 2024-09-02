// Array - stores multiple values in a single variable

// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
console.log(fruits);

// Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Get the last fruit?
console.log("Last fruit:", fruits[fruits.length - 1]);

/* Changing an array */

// Modifying an existing index
fruits[1] = "Grapes";
console.log(fruits);

// Add (.push())
fruits.push("Star Apple", "Durian", "Tomato");
console.log(fruits);

// Remove (.pop())
let poppedIndex = fruits.pop();
console.log(poppedIndex, fruits);

// Add between existing elements (.splice())
let spliceArea = fruits.splice(2, 0, "Kiwi");
console.log(fruits);

// Removing specific elements (.splice())
spliceArea = fruits.splice(0, 2);
console.log(fruits);

/* Array iteration */
// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// forEach
fruits.forEach(function(fruit) {
    console.log(fruit);
})
// Functions allow us to write reusable blocks of code that can be called whenever needed

// Defining a function
function greet() {
    console.log("Hello, welcome to the world of functions!");
    console.log("Cool!");
}

// Calling a function
greet();
greet();
greet();
greet();

// Functions with parameters
function sum(num1, num2) {
    console.log("Calculating the value...");
    return num1 + num2;
}

// Calling with arguments
console.log(sum(5, 8));

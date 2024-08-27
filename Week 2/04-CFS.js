// Conditional Statements

// if | else if | else
let temperature = 30;
if (temperature < 0) {
    console.log("IT'S SO COLD!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It's cool outside.");
} else if (temperature >= 20 && temperature < 30) {
    console.log("It's pretty warm.");
} else {
    console.log("It's hot outside.");
}

// switch
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("The start of the week.");
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("The end of the week.");
        break;
    default: 
        console.log("It is a regular day."); 
}

// Looping Statements

// for (initialization; condition; increment)
for (let i = 1; i <= 5; i++) {
    console.log("for loop count:", i);
}

// while
let count = 1;
while (count <= 5) {
    console.log("while loop count:", count);
    count++;
}

let username = '';
while (username == '') {
    username = prompt("Enter your username!");

    if (username == '') {
        alert("Please enter your username!");
    }
}

// do-while
let counter = 10;
do {
    console.log("Do-while count:", counter);
    counter++;
} while (counter <= 5);
console.log("Hello World!");

// var - global (anywhere)
var firstName = "Myrtile";
firstName = "Catherine";
console.log("First Name:", firstName);

// let - local (inside {})
let lastName = "Cayanan";
lastName = "Sarmiento";
console.log("Last Name:", lastName);

if (true) {
    var email = "johndoe@gmail.com";
    let userName = "johndoe";

    console.log("Email:", email);
    console.log("Username:", userName);
}

console.log("Email:", email);
// console.log("Username:", userName); - ERROR

// const
const funds = 0;
// funds = 200; - ERROR
console.log("Funds:", funds);

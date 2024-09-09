/* TARGETING */
// Accessing Element using getElementById()
let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);

// getElementsByClassName()
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with class:", elementsWithClass);

// Indexing
console.log(elementsWithClass[0]);
console.log(elementsWithClass["second-div"]);

// getElementsByTagName()
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

/* Query Selector */
// querySelector() - FIRST OCCURENCE
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);

let h3Child = document.querySelector("div h3");
console.log(h3Child);

// querySelectorAll() - ALL OCCURENCES
let headings = document.querySelectorAll("h3");
console.log("Heading Tags:", headings);

/* MANIPULATION */

// Textcontent
headings[0].textContent = "<em>New Heading!</em>";
headings[0].innerHTML = "<em>New Heading!</em>";

// Update Attributes
headings[0].style.color = "white";
headings[0].style.backgroundColor = "black";
headings[0].style.padding = "10px";

let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Update Classes (and possibly ids)

// dayNightIcon.id = "new-id"; (possible, but not generally used)

listItems[0].classList.add("class1");
listItems[0].classList.remove("class1");
listItems[0].classList.toggle("class1"); // on
listItems[0].classList.toggle("class1"); // off
console.log(listItems[0].classList);

// Append New Elements
/* 
    1. Create Element
    2. Change attributes, text, and others for new element
    3. Append to an existing element
*/
let parentElement = document.querySelector("#parent-element");
let newElement = document.createElement("h4");
newElement.textContent = "I am new!";
parentElement.appendChild(newElement);

// Remove Elements
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

/* EVENT LISTENERS */
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
  let pageContainer = document.querySelector("#page-container");
  let pageModeText = document.querySelector("#page-mode-text");

  // styling
  pageContainer.style.backgroundColor = "black";
  pageContainer.style.color = "white";

  // text content
  pageModeText.textContent = "Dark Mode";
});

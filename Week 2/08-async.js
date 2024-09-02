// Synchronous vs Asynchronous

// Synchronous
console.log("First");
console.log("Second");
console.log("Third");

// Asynchronous
console.log("First");
setTimeout(() => {
  console.log("Second");
}, 2000);
console.log("Third");

// setTimeout vs setInterval
setTimeout(() => {
  console.log("I'll appear in 3 seconds.");
}, 3000); // 3 secs

let counter = 0;
const threeSecondFunction = setInterval(() => {
    console.log("I'll appear in 3 seconds.");
    counter++;

    if (counter == 5)
        clearInterval(threeSecondFunction);
}, 3000) // 3 secs

// Callbacks
const getData = (callback) => {
  setTimeout(() => {
    const data = "This is the data.";
    callback(data);
  }, 1000); // 1 second delay to get the data
};

const processData = (data) => {
  console.log("Processed data:", data);
};

getData(processData);

// Callback Hell
// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("Step 1 complete.");
//     callback();
//   }, 1000);
// };

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("Step 2 complete.");
//     callback();
//   }, 1000);
// };

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("Step 3 complete.");
//     // callback();
//   }, 1000);
// };

// // Callback Hell example 1
// step1(() => step2(() => step3()));

// // Callback Hell example 2
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps complete.");
//     });
//   });
// });

/* Promises */
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 complete.");
      resolve();
    }, 1000);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 complete.");
      resolve();
    }, 1000);
  });
};

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 complete.");
      resolve();
    }, 1000);
  });
};

// Chaining Promises
step1()
  .then(step2)
  .then(step3)
  .then(() => console.log("All steps complete."))
  .catch((error) => console.error("An error occurred:", error));

/* Async/Await */
const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All steps complete.");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

/* 
    Synchronous - Code Running Immediately
    Asynchronous - Code with possible delays
*/
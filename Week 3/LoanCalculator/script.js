// Targetting
const loanForm = document.querySelector("#loanForm");
const loanAmountInput = document.querySelector("#loanAmount");
const interestRateInput = document.querySelector("#interestRate");
const loanTermInput = document.querySelector("#loanTerm");
const resultDiv = document.querySelector("#result");

// Add event listener
loanForm.addEventListener("submit", calculateLoanPayment);

// Function for calculation
function calculateLoanPayment(e) {
    // prevent refreshing after submitting
    e.preventDefault();
    
    // Retrieve user input values
    const loanAmount = parseFloat(loanAmountInput.value);
    const interestRate = parseFloat(interestRateInput.value) / 100;
    const loanTerm = parseFloat(loanTermInput.value) * 12;

    // Calculate monthly payment
    const monthlyInterestRate = interestRate / 12;
    const numerator = loanAmount * monthlyInterestRate * (1 + monthlyInterestRate ** loanTerm);
    const denominator = Math.pow(1 + monthlyInterestRate, loanTerm) - 1;
    const monthlyPayment = numerator / denominator;

    // Display the result
    resultDiv.textContent = `Monthly Payment : Php${monthlyPayment.toFixed(2)}`;
}
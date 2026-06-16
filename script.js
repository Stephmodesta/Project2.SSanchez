function calculateMortgage() {
  let principal = parseFloat(document.getElementById("principal").value);
  let yearlyRate = parseFloat(document.getElementById("rate").value);
  let years = parseInt(document.getElementById("years").value);

  // validation
  if (isNaN(principal) || principal <= 0) {
    alert("Please enter a valid loan amount.");
    return;
  }

  if (isNaN(yearlyRate) || yearlyRate <= 0) {
    alert("Please enter a valid interest rate.");
    return;
  }

  let r = yearlyRate / 1200;
  let n = years * 12;

  let payment = (principal * r) / (1 - Math.pow(1 + r, -n));

  document.getElementById("result").innerText =
    "Estimated Monthly Payment: $" + payment.toFixed(2);
}

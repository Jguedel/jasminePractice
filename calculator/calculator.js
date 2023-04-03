window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = document.querySelector("#loan-amount").value;
  let years = document.querySelector("#loan-years").value;
  let rate = document.querySelector("#loan-rate").value;
  let obj = { amount: amount, years: years, rate: rate };
  document.querySelector("#loan-amount").value = "";
  document.querySelector("#loan-years").value = "";
  document.querySelector("#loan-rate").value = "";
  return obj;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  console.log("hit");
  let test = setupIntialValues();
  document.querySelector("#monthly-payment").innerHTML =
    calculateMonthlyPayment(test);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values);
  let principle = values.amount;
  let year = values.years * 12;
  let interRate = values.rate / 100 / 12;
  let payment;
  payment = (principle * interRate) / (1 - Math.pow(1 + interRate, -1 * year));
  //payment = (principle * interRate) / (1 - (1 + interRate) - year);

  console.log((Math.round(payment * 100) / 100).toString().length);
  console.log((Math.round(payment * 100) / 100).toString());
  return Math.round(payment * 100) / 100;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}

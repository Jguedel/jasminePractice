let serverTable = document.querySelector("#serverTable tbody");
let billTable = document.querySelector("#paymentTable tbody");

serverTable.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName == "TD") {
    serverTable.removeChild(event.target.parentNode);
  }
});

billTable.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName == "TD") {
    billTable.removeChild(event.target.parentNode);
    let del = event.target.parentElement.id;
    delete allPayments[del];
    console.log(allPayments[del]);
    updateSummary();
  }
  console.log(event.target.parentElement);
});

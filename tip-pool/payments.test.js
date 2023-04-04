describe("Payments test (with setup and tear-down)", () => {
  beforeEach(() => {
    billAmtInput.value = 10;
    tipAmtInput.value = 1;
  });

  it("payment wont add with empty values", () => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    submitPaymentInfo();
    //get tr number
    let paytable = document.querySelectorAll("#paymentTable tbody tr");
    let sumtable = document.querySelector("#summary tbody tr");
    //check tables are empty
    expect(paytable.length).toEqual(0);
    expect(sumtable.firstChild.innerHTML).toEqual(undefined);
  });

  it("tables update", () => {
    submitPaymentInfo();
    //get tr number
    let paytable = document.querySelectorAll("#paymentTable tbody tr");
    let sumtable = document.querySelector("#summary tbody tr");
    //check tables have 1 input
    expect(paytable.length).toEqual(1);
    console.log(sumtable.firstElementChild.nextElementSibling);
    expect(sumtable.firstElementChild.innerHTML).toEqual("$10");
    expect(sumtable.firstElementChild.nextElementSibling.innerHTML).toEqual(
      "$1"
    );
    expect(
      sumtable.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
    ).toEqual("10%");
  });

  it("percent adds corrrectly", () => {
    submitPaymentInfo();
    billAmtInput.value = 20;
    tipAmtInput.value = 2;
    submitPaymentInfo();
    let sumtable = document.querySelector("#summary tbody tr");
    expect(
      sumtable.firstElementChild.nextElementSibling.nextElementSibling.innerHTML
    ).toEqual("10%");
  });

  afterEach(() => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});

/* 
server remove
bill remove
sum updated?
*/
describe("Removing testing", () => {
  beforeEach(() => {
    serverNameInput.value = "Alice";
    billAmtInput.value = 10;
    tipAmtInput.value = 1;
  });

  it("server is removed", () => {
    submitServerInfo();
    updateServerTable();
    document.querySelector("#serverTable tbody tr td").click();
    //select table
    let table = document.querySelectorAll("#serverTable tbody tr");
    expect(table.length).toEqual(0);
  });

  it("bill item removed and summary updated", () => {
    submitPaymentInfo();
    document.querySelector("#paymentTable tbody tr td").click();
    //select table
    let empTable = document.querySelectorAll("#paymentTable tbody tr");
    let sumTable = document.querySelectorAll("#serverTable tbody tr");
    expect(empTable.length).toEqual(0);
    expect(sumTable.length).toEqual(0);
  });

  afterEach(() => {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
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

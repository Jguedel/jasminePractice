describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
    console.log(allServers);
  });
  it("should not add if name is empty", () => {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
  });

  it("did table update?", () => {
    submitServerInfo();
    updateServerTable();
    //select table
    let table = document.querySelectorAll("tbody tr");
    //check if only 1 open and close tr tag in tbody
    expect(table.length).toEqual(2);
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});

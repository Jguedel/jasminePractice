it("should calculate the monthly rate correctly", function () {
  // ...
  expect(calculateMonthlyPayment({ amount: 2, years: 1, rate: 10 })).toEqual(
    0.18
  );
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 2, years: 1, rate: 0.1 }).toString.length
  ).toBeLessThan(5);
});

/// etc

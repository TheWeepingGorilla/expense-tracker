describe("Purchase", function() {
  describe("totalCost", function() {
  it("returns total cost given amount and quantity", function() {
    var testPurchase = Object.create(Purchase);
    testPurchase.amount = 5;
    testPurchase.quantity = 5;
    testPurchase.totalCost().should.equal(25);
    });
  });
});

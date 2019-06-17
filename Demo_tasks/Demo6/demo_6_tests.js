describe("naturalNumbers", function() {

  it("returns requested list of natural numbers by documentation", function() {
      expect(naturalNumbers(8, 4)).to.eql("2, 3, 4, 5, 6, 7, 8, 9");
  });

  it("returns error object", function() {
      expect(naturalNumbers(-8, 4)).to.eql({
        status: 'failed', 
        reason: 'some of paramerers is not correct'
      });
  });

});
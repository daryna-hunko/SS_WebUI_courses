describe("envelopes", function() {

  it("returns requested list of natural numbers by documentation", function() {
      expect(envelopes([2,2], [2,4])).to.eql([2,4]);
  });

  it("returns requested list of natural numbers by documentation", function() {
      expect(envelopes([12,2], [2,4])).to.eql([12,2]);
  });

  it("returns error object", function() {
      expect(envelopes([12,1], [2,4])).to.eql(0);
  });

});
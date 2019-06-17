describe("envelopes", function() {

  it("returns the envelope that can be included", function() {
      expect(envelopes([2,2], [2,4])).to.eql([2,2]);
  });

  it("returns the envelope that can be included", function() {
      expect(envelopes([12,2], [2,4])).to.eql([2,4]);
  });

  it("returns 0 - cannot include", function() {
      expect(envelopes([12,1], [2,4])).to.eql(0);
  });

});
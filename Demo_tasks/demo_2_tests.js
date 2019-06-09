describe("envelopes", function() {

  it("returns the envelope that is bigger", function() {
      expect(envelopes([2,2], [2,4])).to.eql([2,4]);
  });

  it("returns the envelope that is bigger", function() {
      expect(envelopes([12,2], [2,4])).to.eql([12,2]);
  });

  it("returns 0 - cannot include", function() {
      expect(envelopes([12,1], [2,4])).to.eql(0);
  });

});
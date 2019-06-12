describe("fibonachi", function() {

  it("returns the array of fibonachi numbers in limits", function() {
      expect(fibonachi({min: 100, max: 999})).to.eql([200, 300, 500, 800]);
  });

  it("returns the array of fibonachi numbers by length", function() {
      expect(fibonachi({min: 0, max: 0},8)).to.eql([20000000, 30000000, 50000000, 80000000, 130000000, 210000000, 340000000, 550000000]);
  });

  it("returns the array of fibonachi numbers by limits and ignnores length", function() {
      expect(fibonachi({min: 100, max: 999},8)).to.eql([200, 300, 500, 800]);
  });

  it("returns error object", function() {
      expect(fibonachi({min: 'fg', max: 999})).to.eql({
        status: 'failed', 
        reason: 'Not a number'
      });
  });

});
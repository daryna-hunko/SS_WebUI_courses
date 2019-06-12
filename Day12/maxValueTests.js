describe("Example Tests", function(){

  it("Small Integers", function(){

   Test.assertSimilar(findPartMaxProd(8), [[3, 3, 2], 18]);

   Test.assertSimilar(findPartMaxProd(10), [[3, 3, 2, 2], 36]);

  });

 });

 describe("maxValue", function() {

  it("returns array + max value", function() {
      expect(maxValue(8)).to.eql([[3, 3, 2], 18]);
      expect(maxValue(10)).to.eql([[3, 3, 2, 2], 36]);
  });

});
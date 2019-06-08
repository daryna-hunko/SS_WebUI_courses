describe("createField", function() {

  it("returns requested by documentation", function() {
      expect(createField(6,10,'a')).to.eql('\n a a a a a a a a a a\na a a a a a a a a a \n a a a a a a a a a a\na a a a a a a a a a \n a a a a a a a a a a\na a a a a a a a a a \n');
  });

  it("returns error object", function() {
      expect(createField(10,'fdgdf','a')).to.eql({
        reason: "width is not a number or is Infinity",
        status: "failed"
      });
  });

  it("returns error object", function() {
      expect(createField('fdgdf',10, 5)).to.eql({
        reason: "height is not a number or is Infinity",
        status: "failed"
      });
  });

  it("returns error object", function() {
      expect(createField(10, 5, undefined)).to.eql({
        status: 'failed', 
        reason: 'symb is not a number or string'
      });
  });

});
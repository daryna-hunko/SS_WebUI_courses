describe("toData", function() {

    it("returns the decimal number", function() {
        assert.equal(NumC.toData(456454), 456454);
        assert.equal(NumC.toData(' fg  ggfb1313'), NaN);
        assert.equal(NumC.toData(' 1313 &nbsp;'), 1313);
        assert.typeOf(NumC.toData(' 1313 &nbsp;'), 'number');
    });
  
  });

describe("isNumeric", function() {

    it("check whether an input is a number", function() {
        assert.equal(NumC.isNumeric(456454), true);
        assert.equal(NumC.isNumeric(' fg  ggfb1313'), false);
        assert.equal(NumC.toData(), false);
        assert.typeOf(NumC.toData(456454), 'boolean');
    });
  
  });

describe("toSymbol", function() {

    it("returns strings with currency symbol by the input with the currency abbr", function() {
        assert.equal(NumC.toSymbol("UAH"), "₴");
        assert.typeOf(NumC.toSymbol("UAH"), 'string');
    });
  
  });

describe("toCurrency", function() {

    it("returns strings with currency abbr by the input with the currency symbol", function() {
        assert.equal(NumC.toSymbol("$"), "USD");
        assert.typeOf(NumC.toSymbol("$"), 'string');
    });
  
  });
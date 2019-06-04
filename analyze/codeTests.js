describe("toData", function() {

    it("returns the decimal number", function() {
        assert.equal(toData(456454), 456454);
        assert.equal(toData(' fg  ggfb1313'), NaN);
        assert.equal(toData(' 1313 &nbsp;'), 1313);
        assert.typeOf(toData(' 1313 &nbsp;'), 'number');
    });
  
  });

describe("isNumeric", function() {

    it("check whether an input is a number", function() {
        assert.equal(isNumeric(456454), true);
        assert.equal(isNumeric(' fg  ggfb1313'), false);
        assert.equal(toData(), false);
        assert.typeOf(toData(456454), 'boolean');
    });
  
  });

describe("toSymbol", function() {

    it("returns strings with currency symbol by the input with the currency abbr", function() {
        assert.equal(toSymbol("UAH"), "₴");
        assert.typeOf(toSymbol("UAH"), 'string');
    });
  
  });

describe("toCurrency", function() {

    it("returns strings with currency abbr by the input with the currency symbol", function() {
        assert.equal(toSymbol("$"), "USD");
        assert.typeOf(toSymbol("$"), 'string');
    });
  
  });
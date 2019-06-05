describe("toData", function() {

    it("returns the decimal number", function() {
        assert.equal(NumC.toData(456454), 456454);
        assert.equal(NumC.toData(' 1313 &nbsp;'), 1313);
    });

    it("returns the decimal number typeOf check", function() {
        assert.typeOf(NumC.toData(' 1313 &nbsp;'), 'number');
    });
  
  });

describe("toBuh", function () {
    it("check up the input to be matching with requirements", function () {
        assert.equal(NumC.toBuh(1.1223, 3, 'UAH'), '1.1223 UAH');
        assert.equal(NumC.toBuh('asd5555asd'), 'asd5555asd');
    });
});

describe("convertToBuh", function () {
    it("localize input in accordance with locale and returns the result string in the format \'number plus currency\'", function () {
        assert.equal(NumC.convertToBuh('1.1223', 3, 'UAH'), '1.1223 UAH');
    });
});

describe("isNumeric", function() {

    it("check whether an input is a number", function() {
        assert.equal(NumC.isNumeric(456454), true);
    });

    it("check whether an input is a number check 2", function() {
        assert.isTrue(NumC.isNumeric('456454,24'));
    });

  });

describe("toSymbol", function() {

    it("returns strings with currency symbol by the input with the currency abbr", function() {
        assert.equal(NumC.toSymbol("UAH"), "₴");
        assert.isString(NumC.toCurrency('UAH'));
    });
  
  });

describe("toCurrency", function() {

    it("returns strings with currency abbr by the input with the currency symbol", function() {
        assert.equal(NumC.toSymbol("₴"), "UAH");
        assert.isString(NumC.toCurrency('₴'));
    });
  
  });
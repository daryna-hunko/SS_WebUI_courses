describe("countdown", function() {

    it("returns countdown value", function() {
        expect(countdown(-154800000)).to.eql('-43:00:00');
        expect(countdown(0)).to.eql('+00:00:00');
        expect(countdown(61000)).to.eql('+00:01:01');
        expect(countdown(360000000)).to.eql('+100:00:00');
    });

});

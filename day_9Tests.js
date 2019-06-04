describe("createMixedSequence", function() {

    it("returns the empty array if pattern is empty", function() {
        assert.equal(createMixedSequence([], 10), []);
    });
    it("returns the empty array if pattern is empty", function() {
        expect(createMixedSequence([], 10)).to.eql([]);
    });
    it("returns the empty array if pattern is empty", function() {
        expect(createMixedSequence([], 10)).to.deep.equal([]);
    });
    it("returns the empty array if pattern is empty", function() {
        assert.equal(createMixedSequence(['fib'], 0), []);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 fibonacci", function() {
        assert.equal(createMixedSequence(['fib'], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 padovan", function() {
        assert.equal(createMixedSequence(['pad'], 10), [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 jacobsthal", function() {
        assert.equal(createMixedSequence(['jac'], 10), [0, 1, 1, 3, 5, 11, 21, 43, 85, 171]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 pell", function() {
        assert.equal(createMixedSequence(['pel'], 10), [0, 1, 2, 5, 12, 29, 70, 169, 408, 985]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 tribonacc", function() {
        assert.equal(createMixedSequence(['tri'], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 tetranacci", function() {
        assert.equal(createMixedSequence(['tet'], 10), [0, 0, 0, 1, 1, 2, 4, 8, 15, 29]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 fibonacci \+ tetranacci", function() {
        assert.equal(createMixedSequence(['fib','tet'], 10), [0, 0, 1, 0, 1, 0, 2, 1, 3, 1]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 jacobsthal \+ jacobsthal \+ pell", function() {
        assert.equal(createMixedSequence(['jac', 'jac', 'pel'], 10), [0, 1, 0, 1, 3, 1, 5, 11, 2, 21]);
    });

});

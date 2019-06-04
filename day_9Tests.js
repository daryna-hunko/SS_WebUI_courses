describe("createMixedSequence", function() {

    it("returns the empty array if pattern is empty", function() {
        assert.equal(createMixedSequence([], 10), []);
    });
    it("returns the empty array if pattern is empty", function() {
        assert.equal(createMixedSequence(['fib'], 0), []);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 fibonacci", function() {
        assert.equal(createMixedSequence(['fib'], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it("returns the array on mixed numbers in accordance with pattern - 10 fibonacci", function() {
        assert.equal(createMixedSequence(['pad'], 10), [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]);
    });
  
  });

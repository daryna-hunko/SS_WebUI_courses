describe("letsPlay", function() {

    it("returns the resault of the play", function() {
        assert.equal(letsPlay([1,1,1],[0,0,0],[0,0,0]), 1);
        assert.equal(letsPlay([1,1,1],[0,0,0],[2,2,2]), -1);
    });
  
  });

  describe("checkInput", function() {

    it("checks input to be array 3x3 with numbers", function() {
        assert.equal(checkInput([1,1,1],[0,2,0],[0,1,2]), 1);
        assert.equal(checkInput([1,0,1],[0,0,0],[2,2,2]), 1);
        assert.equal(checkInput([0,1],[0,0,0],[2,2,2]), 0);
    });
  
  });
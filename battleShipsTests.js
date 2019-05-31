describe("damagedOrSunk", function() {

  it("возвращает баллы, сколько сбитых, ранненых, и нетронутых кораблей", function() {
    assert.equal(damagedOrSunk([[0,0,0,2,2,0],[0,3,0,0,0,0],[0,3,0,1,0,0],[0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]),
                 '{ sunk: 0, damaged: 2, notTouched: 1, points: 0 }');
  });

});

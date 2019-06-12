describe("findTheLongest", function() {

  it("returns the value", function() {
      expect(findTheLongest('12332145665444448')).to.eql('123321');
  });

  it("returns the value", function() {
      expect(findTheLongest(12344554432145665444448)).to.eql('2344554432');
  });

  it("returns the value", function() {
      expect(findTheLongest('sadhdshahahahahahah')).to.eql('hahahahahahah');
  });

});
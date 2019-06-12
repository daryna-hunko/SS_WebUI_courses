describe("dateFormatter", function() {

  it("returns date in the angular format", function() {
      expect(dateFormatter(3600000000000, 'yyyy/MM/dd')).to.eql('2084/00/06');
  });

});

describe('factorial', function() {
  it("will return 1 when factorial is called on 0", function() {
    expect(factorial(0)).to.equal(1);
  });

  it("will return 1 when factorial is called on 1", function() {
    expect(factorial(1)).to.equal(1);
  });

  it("will return the factorial of a number", function() {
    expect(factorial(10)).to.equal(3628800);
  });
});

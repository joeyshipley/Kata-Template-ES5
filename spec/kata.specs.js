describe("Kata: FizzBuzz", function() {

  it("When 1", function() {
    var result = fizzBuzz(1);
    expect(result).toEqual('1');
  });

  it("When 2", function() {
    var result = fizzBuzz(2);
    expect(result).toEqual('2');
  });

  it("When 3", function() {
    var result = fizzBuzz(3);
    expect(result).toEqual('Fizz');
  });

  it("When 5", function() {
    var result = fizzBuzz(5);
    expect(result).toEqual('Buzz');
  });

  it("When 15", function() {
    var result = fizzBuzz(15);
    expect(result).toEqual('FizzBuzz');
  });

});

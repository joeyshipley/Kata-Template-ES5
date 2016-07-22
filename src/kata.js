function kata(input) {
  return fizzBuzz(input);
}

// NOTE: To manually send to console output:
// IO.output('information to output');

function fizzBuzz(num) {
  num = parseInt(num);

  if(num % 15 == 0) { return 'FizzBuzz'; }
  if(num % 5 == 0) { return 'Buzz'; }
  if(num % 3 == 0) { return 'Fizz'; }

  return num.toString();
}
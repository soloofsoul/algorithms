/*
The following code sums the digits in a number.

Runtime: O( log n). The runtime will be the number of digits in the number. A number with d digits can have a value up to led.
If n = led, then d = log n. Therefore, the runtime is O( log n).
 */

const sumDigits = num => {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }

  return sum;
};

console.log(sumDigits(351));
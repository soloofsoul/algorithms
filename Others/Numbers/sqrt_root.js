/*
The following code computes the [integer) square root of a number. If the number is not a
perfect square (there is no integer square root), then it returns -1 .It does this by successive
guessing. If n is 100, it first guesses SO. Too high? Try something lower - halfway between 1
and SO.

Runtime: 0 (log n) . This algorithm is essentially doing a binary search to find the square root. Therefore, the
runtime is O(log n) .
 */

const sqrt_helper = (n, min, max) => {
  if (max < min) return -1; // no square root

  const guess = parseInt((min + max) / 2);
  const guessTwice = guess * guess;
  if (guessTwice === n) { // found it
    return guess;
  } else if (guessTwice < n) { // too low
    return sqrt_helper(n, guess + 1, max); // try higher
  } else {
    return sqrt_helper(n, min, guess - 1); // try lower
  }
};
const sqrt = n => sqrt_helper(n, 1, n);

console.log(sqrt(36));


/*
The following code computes the [integer) square root of a number. If the number is not
a perfect square (there is no integer square root), then it returns -1. It does this by trying
increasingly large numbers until it finds the right value (or is too high).

Runtime: O(sqrt(n» . This is just a straightforward loop that stops when guess*guess > n (or, in other
words, when guess > sqrt (n »).
 */

const sqrt2 = num => {
  let i;

  for (i = 0; i * i <= num; i++) {
    if (i * i === num) {
      return i;
    }
  }

  return -1;
};

console.log(sqrt2(121));
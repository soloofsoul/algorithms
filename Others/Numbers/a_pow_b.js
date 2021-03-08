/*
The following code computes a pow b.

Runtime: 0 (b) .The recursive code iterates through b calls, since it subtracts one at each level.
 */

const pow = (a, b) => {
  if (b < 0) {
    return 0; //
  } else if (b === 0) {
    return 1;
  } else {
    return a * pow(a, b - 1);
  }
};

console.log(pow(3, 3));

/*
The following code computes a % b.

Runtime: 0 (1) .It does a constant amount of work.
 */

const mod = (a,b) => {
  if (b <= 0) {
    return -1; // error
  }

  const div = parseInt(a / b);
  return a - div * b;
};

console.log(mod(4, 2));
/*
The following code computes the product of a and b.

Runtime: 0 (b) .The for loop just iterates through b.
 */

const mul = (a,b) => {
  let sum = 0, i;

  for (i = 0; i < b; i++) {
    sum +=a;
  }

  return sum;
};

console.log(mul(3, 2));
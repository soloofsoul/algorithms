/*
The following code performs integer division.

Runtime: O( ~ ) . The variable count will eventually equal ~. The while loop iterates count times. Therefore, it
iterates ~ times. (assuming a abd b are both positive)
 */

const div = (a,b) => {
  let count = 0;
  let sum = b;

  while (sum <= a) {
    sum +=b;
    count++;
  }

  return count;
};

console.log(div(15,2));
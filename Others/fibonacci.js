const fib = num => {
  if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  return fib(num-1) + fib(num-2);
};

let i;

for(i = 0; i < 10; i++) {
  console.log(i, ': ', fib(i));
}

// With Memo
const fib2 = (num, memo) => {
  if (num <= 0) {
    return 0;
  } else if(num === 1) {
    return 1;
  } else if (memo[num] > 0) {
    return memo[num];
  }

  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);

  return memo[num];
};

const n = 10;
const memo = [];
for(i = 0; i < n; i++) {
  console.log(fib2(i, memo));
}
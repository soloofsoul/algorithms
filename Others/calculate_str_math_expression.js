// stack compute (1 + ( (2 + 3) * (4 * 5) ))

const OPERATIONS = {
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

function calculate(expression) {
  let i, char;
  let numbersStack = [], operationsStack = [];

  for (i = 0; i < expression.length; i++) {
    char = expression[i];

    if (char !== '(') {
      if (char === ')') {
        const a = +numbersStack.pop();
        const b = +numbersStack.pop();
        const operation = operationsStack.pop();
        const result = OPERATIONS[operation](a, b);
        numbersStack.push(result);
      } else if (isNaN(char)) {
        operationsStack.push(char);
      } else {
        numbersStack.push(char);
      }
    }
  }

  return numbersStack[0];
}

console.log(calculate('(1+((2+3)*(4*5)))'));
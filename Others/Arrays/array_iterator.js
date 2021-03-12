function arrayIterator(arr) {
  let index = 0;

  return {
    next: () => index < arr.length ?
      { value: arr[index++], done: false } :
      { done: true }
  };
}

const it = arrayIterator(['one', 'two', 'three']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);

// ===================================================

function reverseArrayIterator(arr) {
  let index = arr.length - 1;

  return {
    next: () => index >= 0 ?
      { value: arr[index--], done: false } :
      { done: true }
  };
}

const it1 = reverseArrayIterator(['one', 'two', 'three']);

console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().done);

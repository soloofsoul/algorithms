function swapItems(arr, p, q) {
  const swap = arr[p];
  arr[p] = arr[q];
  arr[q] = swap;
}

function shuffle(arr) {
  let i, n = arr.length;

  for (i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * i);
    swapItems(arr, i, rand);
  }
}

const arr = [-1,  0,  1,  2,  3,  5, 6,  7,  8, 10, 11, 15, 16, 52, 65];
shuffle(arr);
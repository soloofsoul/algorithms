/*
Shell sort with increment sequence 3x+1

TODO: implement Sendgewick increment sequence
*/

function swapItems(arr, p, q) {
  const swap = arr[p];
  arr[p] = arr[q];
  arr[q] = swap;
}

function shellSort(arr) {
  const n = arr.length;
  let h = 1, i, j;

  while (h < Math.floor(n / 3)) {
    h = 3*h + 1;
  }

  while (h >= 1) {
    for (i = h; i < n; i++) {
      for(j = i; j >= h && arr[j] < arr[j-h]; j=j-h) {
        swapItems(arr, j, j-h);
      }
    }

    h = Math.floor(h/3);
  }
}

const arr = [2,1,5,3,8,6,15,-1,52,0,10,16,7,11,65];
shellSort(arr);
console.log(arr);
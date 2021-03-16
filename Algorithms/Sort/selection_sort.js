/*
Is using (N-1) + (N-2) + ... + 1 + 0 ~ N*N/2 compares and N exchanges
*/

function swap(arr, p, q) {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

function findMin(arr, start) {
  let i, min = start;

  for (i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }

  return min;
}

function selectionSort(arr) {
  let i, n = arr.length, min;

  for (i = 0; i < n; i++) {
    min =  findMin(arr, i);
    if (arr[i] > arr[min]) {
      swap(arr, i, min);
    }
  }
}


const arr =  [52, 1, 15, 7, 10,  3, 16, 8,  6, 2, 65, 11, 0, 5, -1]
selectionSort(arr);
console.log(arr);
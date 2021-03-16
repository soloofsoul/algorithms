/*
To sort randomly-ordered array with distinct keys it is using
i/4 * N*N compares and 1/4 * N * N exchanges on average
*/

function swap(arr, p, q) {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

function insertionSort(arr) {
  let i, j, n = arr.length;

  for (i = 1; i < n; i++) {
    for(j = i; j >= 0; j--) {
      if(arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
}


const arr =  [52, 1, 15, 7, 10,  3, 16, 8,  6, 2, 65, 11, 0, 5, -1]
insertionSort(arr);
console.log(arr);
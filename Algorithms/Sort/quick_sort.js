/*
Best case: number of compares is ~ N lg N
Worst case: number of compares is ~ 1/2 N*N (when shuffle actually sorted array)

Random shuffle is probabilistic guarantee against worst case
*/
function swap(arr, p, q) {
  const temp = arr[p];
  arr[p] = arr[q];
  arr[q] = temp;
}

function shuffle(arr) {
  let i, n = arr.length;

  for (i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * i);
    swap(arr, i, rand);
  }
}

function partition(arr, lo, hi) {
  let i = lo, j = hi + 1;

  while(true) {
    while(arr[++i] < arr[lo]) {
      if (i === hi) break;
    }

    while(arr[lo] < arr[--j]) {
      if (j === lo) break;
    }

    if (i >= j) break;

    swap(arr, i, j);
  }

  swap(arr, lo, j);

  return j;
}

function sort(arr, lo, hi) {
  /*
  Improvement: for tiny arrays this piece of code
  if (hi <= lo + CUTOFF - 1) {
    insertionSort(a, lo, hi);
    return;
  }
  instead of this one: if (hi <= lo) return;
  */
  if (hi <= lo) return;

  /*
  Improvement: best choice for pivot item = median
  Median-of-3 (random items)
  int m = medianOf3(a, lo, lo + (hi - lo)/2, hi);
  swap(a, lo, m);
   */

  let j = partition(arr, lo, hi);
  sort(arr, lo, j-1);
  sort(arr, j+1, hi);
}

const arr =  [1, 10, 7, 3, 15, 16, 52, -1, 0, 8, 5, 6, 2, 11 ];
shuffle(arr);
sort(arr, 0, arr.length - 1);
console.log(arr);
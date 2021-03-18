/*
N Log N
*/
function merge(arr, aux, lo, mid, hi) {
  let k;

  for(k = lo; k <= hi; k++) {
    aux[k] = arr[k];
  }

  let i = lo, j = mid + 1;
  for(k = lo; k <= hi; k++) {
    if (i > mid) {
      aux[k] = arr[j++];
    } else if (j > hi) {
      aux[k] = arr[i++];
    } else if (arr[i] < arr[j]) {
      aux[k] = arr[i++];
    } else {
      aux[k] = arr[j++];
    }
  }
}

function sort(arr, aux, lo, hi) {
  /*
  Improvement: for tiny subarrays, CUTOFF to insertion sort for 7 item
   if (hi <= lo + CUTOFF - 1) {
     insertionSort(arr, lo, hi);
     return;
   }
  */
  if (hi <= lo) return;

  const mid = lo + Math.floor((hi - lo) / 2);
  sort(arr, aux, lo, mid);
  sort(arr, aux, mid + 1, hi);
  /*
  Improvement: stop if already sorted.
   Biggest item in 1st half <= smallest item in 2nd half
   if (!less(arr[mid + 1], arr[mid])) return;
  */
  merge(arr, aux, lo, mid, hi);
}

const arr =  [1, 10, 7, 3, 15, 16, 52, -1, 0, 8, 5, 6, 2, 11 ];
let aux = [];
sort(arr, aux, 0, arr.length - 1);
console.log(aux);
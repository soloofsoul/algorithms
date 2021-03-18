/*
Quicksort with 3-way partitioning - reduces running time from linearithmic to linear in broad class of applications
It's goal is to speedup quicksort in the presence if duplicate keys
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

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  else return 0;
}

// lo ... lt .. i .. gt .... hi
function sort(arr, lo, hi) {
  if (hi <= lo) return;

  let lt = lo, gt = hi;
  let v = arr[lo];
  let i = lo;

  while(i <= gt) {
    let cmp = compare(arr[i], v);
    if (cmp < 0) swap(arr, lt++, i++);
    else if (cmp > 0) swap (arr, i, gt--);
    else i++;
  }

  sort(arr, lo, lt - 1);
  sort(arr, gt + 1, hi);
}

const arr =  [1, 10, 7, 3, 15, 16, 52, -1, 0, 8, 5, 6, 2, 11 ];
shuffle(arr);
sort(arr, 0, arr.length - 1);
console.log(arr);

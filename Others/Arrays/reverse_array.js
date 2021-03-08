const reverseArray = (array) => {
  let i = 0;
  for(;i < array.length / 2; i++) {
    const rightElInd = array.length - i - 1;
    const temp = array[i];
    array[i] = array[rightElInd];
    array[rightElInd] = temp;
  }
};
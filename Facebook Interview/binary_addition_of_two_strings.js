/*
Implement binary addition of two strings.
For example "101101" and "111101" equal "1101010"
You cannot use any type conversion, operate only with strings.
 */

const addTwoBinaries = (str1, str2) => {
  let i;
  let result = '';
  let carryOver = 0;

  for(i = str1.length -1; i >= 0; i--) {
    const dig1 = str1[i];
    const dig2 = str2[i];

    if (dig1 === '0' && dig2 === '0') {
      if (carryOver === 0) {
        result = '0' + result;
      } else {
        result = '1' + result;
        carryOver = 0;
      }
    } else if ((dig1 === '1' && dig2 === '0') || (dig1 === '0' && dig2 === '1')) {
      if (carryOver === 0) {
        result = '1' + result;
      } else {
        result = '0' + result;
        carryOver = 1;
      }
    } else if (dig1 === '1' && dig2 === '1') {
      result = `${carryOver === 0 ? '0' : '1'}${result}`;
      carryOver = 1;
    }
  }

  if (carryOver) {
    result = '1' + result;
  }

  return result;
};

/*
To improve:
- logic for case when strings lengths are different (add 0 to beginning of smaller one)
- edge cases
 */
const permutation = (str, prefix) => {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    let i;

    for (i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str.charAt(i));
    }
  }
};

const str = 'abcd';
permutation(str, '');
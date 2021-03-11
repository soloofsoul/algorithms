/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other

Hints:
- Describe what it means for two strings to be permutations of each other. Now, look at that definition you provided. Can you check the strings against that definition?
- There is one solution that is 0 (N log N) time. Another solution uses some space, but isO(N) time.
- Could a hash table be useful?
- Two strings that are permutations should have the same characters, but in different orders. Can you make the orders the same?
 */
const createMap = str => {
  let map = {}, i, char;

  for (i = 0; i< str.length; i++) {
    char = str[i];
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  return map;
};

const calculateCount = (str, map) => {
  let i, count = 0, char;

  for (i = 0; i < str.length; i++) {
    char = str[i];
    if(map[char]) {
      map[char]--;

      if (map[char] >= 0) {
        count++;
      } else {
        break;
      }
    } else {
      break;
    }
  }

  return count;
};

const checkPermutation = (str1, str2) => {
  const strMap = createMap(str1);
  const count = calculateCount(str2, strMap);

  return count === str1.length;
};

console.log(checkPermutation('abac', 'aabc'));

/*
Quick solution
 */
const checkPermutation1 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
      return true;
    }
  }
};

console.log(checkPermutation1('abac', 'abca'));
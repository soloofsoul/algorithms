/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?

Hints:
- Try a hash table.
- Could a bit vector be useful?
- Can you solve it in O(N log N) time? What might a solution like that look like?

Runtime: O(n*n);
*/
const isUnique = str => {
  let i,j;

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
};

console.log(isUnique('avdhn'));

// Let's use hashmap
const isUnique1 = str => {
  let strMap = {}, i;

  for(i = 0; i < str.length; i++) {
    strMap[str[i]] = i;
  }

  console.log(strMap);

  for (i = 0; i < str.length; i++) {
    const ind = strMap[str[i]];
    if (ind && i !== ind) {
      return false;
    }
  }

  return true;
};

console.log(isUnique1('avdahn'));
/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

Hints:
- Start with the easy thing. Can you check each of the conditions separately?
- What is the relationship between the "insert character" option and the "remove character" option? Do these need to be two separate checks?
- Can you do all three checks in a single pass?
*/

const areOneEdit = (str1, str2) => {
  let i, map = {}, char, zeroes = 0;
  const biggerLength = str1.length > str2.length ? str1.length : str2.length;

  for (i = 0; i < biggerLength; i++) {
    char = str1[i];

    if (char) {
      if (map[char]) {
        map[char]++;
      } else {
        map[char] = 1;
      }
    }


    char = str2[i];

    if (char) {
      if (map[char]) {
        map[char]--;
      } else {
        map[char] = -1;
      }
    }
  }

  console.log(map);

  const mapKeys = Object.keys(map);
  mapKeys.forEach(key => {
    if (map[key] === 0) {
      zeroes++;
    }
  });

  return mapKeys.length - zeroes < 3;
};

console.log(areOneEdit('pale', 'ple'));

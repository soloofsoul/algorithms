/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)

Hints:
- You do not have to-and should not-generate all permutations. This would be very inefficient.
- What characteristics would a string that is a permutation of a palindrome have?
- Have you tried a hash table? You should be able to get this down to 0 (N) time.
- Can you reduce the space usage by using a bit vector?
 */

const isPalindromePermutation = str => {
  const sanitizedInput = str.toLowerCase().split(' ').join('');
  let i, map = {}, char, evenCount = 0, oddItems = [];

  for (i = 0; i < sanitizedInput.length; i++) {
    char = sanitizedInput[i];
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  const mapKeys = Object.keys(map);
  mapKeys.forEach(key => {
    if (map[key] % 2 === 0) {
      evenCount++
    } else {
      oddItems.push(map[key]);
    }
  });

  const allEvenOneOdd = evenCount === mapKeys.length - 1 && oddItems.length === 1;
  const allEven = evenCount === mapKeys.length;

  return allEvenOneOdd || allEven;
};

console.log(isPalindromePermutation('Tact Coa'));
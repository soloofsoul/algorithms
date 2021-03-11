/*
In this exercise, you're going to decompress a compressed string.

Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

The input

3[abc]4[ab]c

Would be output as

abcabcabcababababc

Other rules
Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

Characters allowed as input include digits, small English letters and brackets [ ].

Digits are only to represent amount of repetitions.

Letters are just letters.

Brackets are only part of syntax of writing repeated substring.

Input is always valid, so no need to check its validity.

Learning objectives
This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency.
 */

const decomp = str => {
  let i, num = '', char, numberEndPos = -1, numberStartPos = -1, openedCount = 0, start = -1, end;


  for(i = 0; i < str.length; i++) {
    char = str[i];
    if (char === '[') {
      openedCount++;
      if (numberEndPos === -1) {
        numberEndPos = i;
      }

      if (start === -1) {
        start = i;
      }
    } else if (char === ']') {
      openedCount--;

      if (openedCount === 0) {
        end = i;
        break;
      }
    }

    if (numberStartPos === -1 && !isNaN(str[i])) {
      numberStartPos = i;
    }
  }

  if (start === -1) {
    return str;
  } else {
    num = str.substring(numberStartPos, numberEndPos);
    const decopmStr = decomp(str.substring(start + 1, end));
    let decompFinal = ''

    for(i = 0; i < num; i++) {
      decompFinal += decopmStr;
    }

    const rightStr = str.substring(end + 1, str.length);
    const rightDecompStr = rightStr.length === 0 ? '' : decomp(rightStr);
    const leftStr = str.substring(0, numberStartPos);

    return `${leftStr.length > 0 ? leftStr : ''}${decompFinal}${rightDecompStr}`;
  }
};
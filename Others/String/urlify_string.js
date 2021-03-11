/*
URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith "J 13
Output: "Mr%20J ohn%20Smith"

Hints:
- It's often easiest to modify strings by going from the end of the string to the beginning.
- You might find you need to know the number of spaces. Can you just count them?
 */

const urlify = str => str.replaceAll(' ', '%20');

urlify('Mr John Smith');

/*
One more option
*/
const urlify2 = str => str.split(' ').join('%20');

console.log(urlify3('Mr John Smith'));

/*
One more option
*/
const urlify1 = str => {
  let i;

  for (i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
      str = `${str.substring(0, i)}%20${str.substring(i + 1)}`;
    }
  }

  return str;
};

urlify1('Mr John Smith');
/*
Remove duplicated items in linked list.

Hint:
- Hash map can be used instead if array for storing existing values
- Based on output logic can be slightly changed
  - remove in input list
  - return new list
*/

const removeDups = input => {
  let values = [input.value], node = input.next, prevNode = input;

  while(node) {
    const isValueExist = values.includes(node.value);
    if (isValueExist) {
      prevNode.next = node.next;
    } else {
      values.push(node.value);
      prevNode = node;
    }

    node = node.next;
  }
};

const linkedList = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 2,
        next: null,
      },
    },
  },
};
removeDups(linkedList);

console.log('\nlinkedList: ', linkedList);
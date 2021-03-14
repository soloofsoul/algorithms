// Linked list implementation
const list = {
  first: null,
  isEmpty: function isEmpty() {
    return this.first === null;
  },
  push: function push(item) {
    const prevFirst = this.first;
    this.first = {
      item,
      next: prevFirst,
    };
  },
  pop: function pop() {
    const item = this.first.item;
    this.first = this.first.next;
    return item;
  }
};

console.log(list);
list.push('item 1');
list.push('item 2');
console.log(list);
console.log(list.pop());
list.pop();
console.log(list);
console.log(list.isEmpty());

// array implementation
const list1 = {
  string: [],
  ind: 0,
  isEmpty: function isEmpty() {
    return this.ind === 0;
  },
  push: function push(item) {
    this.string[this.ind++] = item;
  },
  pop: function pop() {
    const item = this.string[--this.ind];
    this.string[this.ind] = null;
    return item;
  }
};

console.log(list1.string);
list1.push('item 1');
list1.push('item 2');
console.log(list1.string);
console.log(list1.pop());
list1.pop();
console.log(list1.string);
console.log(list1.isEmpty());
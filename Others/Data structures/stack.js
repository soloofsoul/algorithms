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
list.push('item 1')
list.push('item 2')
console.log(list);
console.log(list.pop());
list.pop();
console.log(list);
console.log(list.isEmpty());
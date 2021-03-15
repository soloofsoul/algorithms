// Linked list imeplementation
function Node(item, next = null) {
  return { item, next }
}

function Queue() {
  let first = null, last = null;

  const isEmpty = () => first === null;

  const enqueue = item => {
    let oldlast = last;
    last = new Node(item);

    if (isEmpty()) {
      first = last;
    } else {
      oldlast.next = last;
    }
  }

  const dequeue = () => {
    const item = first.item;
    first = first.next;

    if (isEmpty()) {
      last = null;
    }

    return item;
  }

  return { isEmpty, enqueue, dequeue };
}

const q = new Queue();
q.enqueue('item 1');
q.enqueue('item 2');
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.isEmpty());
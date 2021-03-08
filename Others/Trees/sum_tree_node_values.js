const sum = node => {
  if (!node) {
    return 0;
  }

  return sum(node.left) + node.value + sum(node.right);
};

const node = {
  value: 5,
  left: { value: 4 },
  right: { value: 1 },
};

console.log(sum(node));
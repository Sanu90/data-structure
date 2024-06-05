// array to linked list..

const array = [10, 20, 30];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function array2LL(array) {
  if (array.length === 0) {
    return `empty array`;
  }
  const node = new Node(array[0]);
  let current = node;
  for (let i = 1; i < array.length; i++) {
    current.next = new Node(array[i]);
    current = current.next;
  }
  return node;
}

function print(a2L) {
  let current = a2L;
  console.log(current);
}

const a2L = array2LL(array);
console.log(a2L);
print(a2L);

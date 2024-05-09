// prepend a linked list //

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size == 0;
  }
  prepend(number) {
    let node = new Node(number);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List empty.");
    } else {
      let curr = this.head;
      let value = "";
      while (curr) {
        value += `${curr.value} `;
        curr = curr.next;
      }
      //  return value;
      console.log(value);
    }
  }
}

const list = new LinkedList();

console.log("array empty? ", list.isEmpty());
list.prepend(5);
list.prepend(8);
console.log(list.print());
console.log(list.getSize());

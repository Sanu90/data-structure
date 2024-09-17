class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.size == 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  display() {
    if (this.size == 0) {
      return `empty list`;
    }
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += `${current.value} `;
      current = current.next;
    }
    console.log(listValues);
  }

  reverse() {
    this.head = this.reverseRecursion(this.head);
  }
  reverseRecursion(node) {
    if (node.next == null) {
      return node;
    }

    let newHead = this.reverseRecursion(node.next);
    node.next.next = node;
    node.next = null;
    return newHead;
  }
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(41);
list.display();
list.reverse();
list.display();

// single linked list //

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
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  display() {
    if (this.isEmpty()) {
      return `empty list`;
    }
    let current = this.head;
    let getVal = "";
    while (current) {
      getVal += `${current.value} `;
      current = current.next;
    }
    console.log(getVal);
  }

  reverse() {
    if (this.isEmpty()) {
      return `empty List`;
    }
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const list = new LinkedList();
//list.append(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.display();
list.reverse();
list.display();

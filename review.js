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
  prepend(number) {
    const node = new Node(number);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  displayList() {
    if (this.isEmpty()) {
      console.log("Empty list.");
    } else {
      let current = this.head;
      let values = "";
      while (current) {
        values += `${current.value} `;
        current = current.next;
      }
      console.log(values);
    }
  }
}

const list = new LinkedList();
list.displayList();
console.log(list.isEmpty());
list.prepend(1);
list.prepend(78);
list.displayList();

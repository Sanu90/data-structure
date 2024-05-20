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
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(index, value) {
    const node = new Node(value);
    if (index < 0 || index > this.size) {
      console.log("Out of bounds");
      return;
    }
    if (index == 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
  }

  remove(index) {
    let removeNode;
    if (index < 0 || index > this.size) {
      console.log("Error in deleting");
      return;
    }
    if (index == 0) {
      removeNode = this.head;
      this.head = removeNode.next;
    }
  }

  display() {
    if (this.isEmpty()) {
      console.log("Empty list");
    } else {
      let curr = this.head;
      let displayValues = "";
      while (curr) {
        displayValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log("LinkedList values: ", displayValues);
    }
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.prepend(8);
list.prepend(22);
list.prepend(11);
list.append(5);
list.append(18);
console.log(list.getSize());
list.append(9);
list.display();
list.insert(0, 100);
list.display();
list.insert(3, 101);
list.display();

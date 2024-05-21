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

  display() {
    if (this.isEmpty()) {
      console.log("Empty list");
      return;
    } else {
      let curr = this.head;
      let getValues = "";
      while (curr) {
        getValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(getValues);
    }
  }

  deleteIndex(index) {
    let removeNode;
    if (index < 0 || index > this.size) {
      console.log("Invalid operation to perform");
      return;
    }
    if (index == 0) {
      removeNode = this.head;
      this.head = removeNode.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.display();
list.prepend(10);
list.prepend(20);
list.prepend(40);
list.prepend(22);
list.prepend(25);
console.log(list.getSize());
list.display();
list.deleteIndex(0);
list.display();
list.deleteIndex(2);
list.display();
console.log(list.getSize());

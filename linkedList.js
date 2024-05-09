// create a zero node linkedlist //

class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }
  isSize() {
    return this.size;
  }
}

const list = new linkedList();
console.log("Array empty?", list.isEmpty());
console.log("Array size: ", list.isSize());

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

  getSize() {
    return this.size;
  }
}

const list = new linkedList();
console.log(list.isEmpty());
console.log(list.getSize());

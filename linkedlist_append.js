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
list.append(5);
list.append(8);

list.prepend(2);
list.append(10);
console.log(list.print());
console.log(list.getSize());

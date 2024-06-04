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

  // add node at beginning//
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

  // add node at last//
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert a value at a specified index //
  insert(index, value) {
    const node = new Node(value);
    if (index < 0 || index > this.size) {
      console.log("Not a valid operation");
      return;
    }
    if (index == 0) {
      this.prepend(value);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
    // console.log(this.head);
  }

  // delete a node using value //
  removeValue(value) {
    let removeNode;
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let current = this.head;
      while (current.next && current.next.value != value) {
        current = current.next;
      }
      if (current.next) {
        removeNode = current.next;
        current.next = removeNode.next;
        this.size--;
      } else {
        console.log("No such value available");
        return;
      }
    }
  }

  // delete a value using index //
  removeIndex(index) {
    let removeNode;
    if (index < 0 || index > this.size) {
      console.log("Invalid operation");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removeNode = current.next;
      current.next = removeNode.next;
      this.size--;
    }
  }

  // display the linked list //
  display() {
    if (this.isEmpty()) {
      console.log("Empty list");
      return;
    } else {
      let current = this.head;
      let getValues = "";
      while (current) {
        getValues += `${current.value} `;
        current = current.next;
      }
      console.log(getValues);
    }
  }

  // search the value //
  search(value) {
    if (this.isEmpty()) {
      console.log("Empty list..");
      return;
    }
    let current = this.head;
    let i = 1;
    if (value === this.head.value) {
      return `${value} found at position 0`;
    }
    while (current.next && current.next.value != value) {
      current = current.next;
      i++;
    }
    if (current.next) {
      return `${value} found at position ${i}`;
    } else {
      return "not found";
    }
  }

  // find the middle element //
  findMiddle() {
    if (this.isEmpty()) {
      return `empty list`;
    }
    let fast = this.head;
    let slow = this.head;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log("fast is--->", fast);
    return `the middle element is: ${slow.value}`;
  }
}

const list = new LinkedList();
list.prepend(5);
list.prepend(10);
list.append(8);
list.append(1);
list.append(4);
list.insert(5, 22);
console.log(list.getSize());
list.display();
list.removeValue(22);
//console.log(list.getSize());
list.display();
//list.removeIndex(3);
//list.display();
console.log(list.search(22));
console.log(list.findMiddle());

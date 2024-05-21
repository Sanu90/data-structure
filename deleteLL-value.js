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

  deleteValue(value) {
    let removeNode;
    if (this.isEmpty()) {
      console.log("list is empty to delete");
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value != value) {
        prev = prev.next;
      }
      if (prev.next) {
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
      } else {
        console.log("cant delete a value which is not available");
        return null;
      }
      // return null;
    }
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.display();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.display();
list.deleteValue(20);
list.display();
console.log(list.getSize());

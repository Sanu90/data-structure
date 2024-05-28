class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

//   removeValue(value) {
//     if (this.head == null) {
//       console.log("Empty list. nothing to delete");
//       return;
//     }

//     if (this.head.value == value) {
//       this.deleteFirst();
//       this.size--;
//     }
//   }

  display() {
    if (this.isEmpty()) {
      console.log("Empty list");
      return;
    } else {
      let curr = this.head;
      let showValue = "";
      while (curr) {
        //console.log(curr.value);
        showValue += `${curr.value} `;
        curr = curr.next;
      }
      console.log(showValue);
    }
  }
}

const dList = new LinkedList();

dList.prepend(10);
dList.prepend(5);
dList.prepend(15);
console.log(dList.getSize());
dList.display();

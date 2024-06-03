// // single linkedlist//

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.head = null;
//   }
// }

// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size == 0;
//   }
//   getSize() {
//     return this.size;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let previous = this.head;
//       while (previous.next) {
//         previous = previous.next;
//       }
//       previous.next = node;
//     }
//     this.size++;
//   }

//   display() {
//     if (this.isEmpty()) {
//       console.log("empty list");
//       return;
//     } else {
//       let previous = this.head;
//       let values = "";
//       while (previous) {
//         values += `${previous.value} `;
//         previous = previous.next;
//       }
//       console.log("Linked list values: ", values);
//       //console.log("this.head is:", this.head)
//     }
//   }

//   removeIndex(index) {
//     let removeNode;
//     if (index < 0 || index > this.size) {
//       console.log("Invalid delete operation");
//       return;
//     }
//     if (index == 0) {
//       this.head = this.head.next;
//       this.size--;
//     } else {
//       let previous = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         previous = previous.next;
//       }
//       removeNode = previous.next;
//       previous.next = removeNode.next;
//       this.size--;
//     }
//   }

//   removeValue(value) {
//     let removeNode;
//     if (this.isEmpty()) {
//       console.log("Nothing to delete in empty list");
//     }
//     if (value === this.head.value) {
//       this.head = this.head.next;
//       this.size--;
//     } else {
//       let previous = this.head;
//       while (previous.next && previous.next.value != value) {
//         previous = previous.next;
//       }
//       if (previous.next) {
//         removeNode = previous.next;
//         previous.next = removeNode.next;
//         this.size--;
//       } else {
//         console.log(`${value} is not available in the list.`);
//         return;
//       }
//     }
//   }

//   search(value) {
//     // let search;
//     if (this.isEmpty()) {
//       console.log("This list is empty");
//       //return "this is empty";
//     } else {
//       let previous = this.head;
//       let i = 1;
//       while (previous.next && previous.value != value) {
//         console.log(previous.value);
//         i++;
//         previous = previous.next;
//       }
//       console.log(`${value} found at position ${i}`);
//       // if(!previous.next){
//       //   console.log("Value is not seen in this list")
//       // }
//     }
//     console.log("nothing");
//     return -1;
//   }

//   middle() {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     let current = this.head;
//     let fast = this.head;

//     while (fast.next && fast.next.next) {
//       current = current.next;
//       fast = fast.next.next;
//     }
//     return current.value;
//   }
// }

// const list = new linkedList();
// //list.search(10);
// list.prepend(5);
// list.append(3);
// list.append(8);
// list.prepend(9);
// list.prepend(1);
// list.prepend(0)
// list.display();
// // list.search(8);
// // list.removeIndex(3);
// // list.display();
// // list.removeValue(1);
// // list.display();
// // list.search(28);
// console.log(list.middle());

// console.log(list.getSize());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
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

  // function to add at the beginning
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

  // function to add at the last
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

  // function to remove a node using index
  remove(index) {
    let removeNode;
    if (this.isEmpty()) {
      console.log("List is empty");
      return false;
    }
    if (index < 0 || index >= this.size) {
      console.log("Not a valid delete operation");
      return -1;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removeNode = current.next;
      current.next = removeNode.next;
      this.size--;
    }
    return this.head;
  }

  // function to remove a node using value
  removeValue(value) {
    let removeNode;
    if (this.isEmpty()) {
      console.log("List is empty");
      return -1;
    }
    if (this.head.value === value) {
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
        console.log("Value is not in list");
      }
    }
  }

  // function to display the LL
  display() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let getValues = "";
    while (current) {
      getValues += `${current.value} `;
      current = current.next;
    }
    console.log("Linked list is: ", getValues);
  }

  //Function to search a value in LL

  search(value) {
    if (this.isEmpty()) {
      console.log("Empty list");
      return;
    }

    let current = this.head;
    let i = 1;
    while (current != null) {
      if (current.value === value) {
        console.log(`${value} found at position ${i}`);
        return;
      }
      current = current.next;
      i++;
    }
    console.log("Not found");
    return -1;
  }

  findMiddle() {
    console.log("FIND MIDDLE ELEMENT");
    if (this.isEmpty()) {
      console.log("List is empty");
      return -1;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log("Middle element is:", slow.value);
    return;
  }
}

const list = new Linkedlist();
list.prepend(8);
list.append(7);
list.prepend(4);
list.append(1);
list.append(11)
list.prepend(17);
list.prepend(16);
list.display();
list.search(1);
//list.remove(1);
//list.removeValue(1)
list.search(1);
list.display();
list.findMiddle();

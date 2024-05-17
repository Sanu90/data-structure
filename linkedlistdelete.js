// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
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

//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   remove(value, index) {
//     let removeValue;
//     let prev = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       prev = prev.next;
//     }
//     prev.next = removeValue.next;

//   }
// }

// const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
// list.append(5);
// list.append(10);
// list.append(15);
// console.log(list.getSize());

/// find max occurance from array

// let array = [1, 1, 1, 2, 4, 4, 1, 1, 1];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == array[i + 1]) {
//     count++;
//   }

// }
// binary search

// normal method

let array = [1, 2, 3, 4, 5];
let value = 5;

function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (value == array[mid]) return mid;
    if (value < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, value));

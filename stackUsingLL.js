// stack using linkedlist

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack underflow");
      return;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.size--;
  }

  display() {
    if (this.isEmpty()) {
      console.log("stack is empty..nothing to display");
      return;
    }
    let current = this.top;
    let totalVal = "";
    while (current) {
      //console.log(current.value);
      totalVal += `${current.value}\n `;
      current = current.next;
    }

    console.log("STACK\n", totalVal);
  }

  peek() {
    if (this.isEmpty()) {
      console.log("stack is empty.");
      return -1;
    }
    return this.top.value;
  }

  reverse() {
    let prev = null;
    let next = null;
    let current = this.top;
    while (current) {
      //console.log("reverse")
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.top = prev;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(5);
stack.push(25);
console.log("size", stack.getSize());
stack.display();
console.log("top ", stack.peek());
stack.reverse();
console.log("********");
stack.display();

console.log("top ", stack.peek());

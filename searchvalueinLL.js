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

    append(value) {
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
        let prev = this.head;
        let getValues = "";
        while (prev) {
            getValues += `${prev.value} `;
            prev = prev.next;
        }
        console.log(getValues);
        }
    }
    search(value) {
        if (this.isEmpty()) {
        console.log("No such element found");
        return;
        }
        let i = 0;
        let prev = this.head;
        while (prev) {
        if (prev.value == value) {
            console.log(`${value} found in the position: ${i}`);
            return i;
        }
        prev = prev.next;
        i++;
        }
        console.log("Value is not in list");
        return -1;
    }
    }

    const list = new LinkedList();
    list.append(10);
    list.append(11);
    list.append(12);
    list.append(13);
    list.append(14);
    list.display();
    list.search(100);

    console.log(list.getSize());

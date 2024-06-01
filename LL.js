// create an empty linked list and prepend 3 values //

class Node{
  constructor(value){
    this.value=value;
    this.next=null
  }
}

class LinkedList{
  constructor(){
    this.size=0;
    this.head=null;
  }
  
  isEmpty(){
    return this.size==0;
  }
  
  getSize(){
    return this.size;
  }
  
  prepend(value){
    const node=new Node(value)
      if(this.isEmpty()){
        this.head=node;
      }
      else{
        node.next=this.head;
        this.head=node;
      }this.size++;
  }
}


const list=new LinkedList();
console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(5);
list.prepend(15);
console.log(list.getSize())
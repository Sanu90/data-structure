class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Linkedlist{
  constructor(){
    this.head=null;
    this.size=0;
  }
  isEmpty(){
    return this.size==0
  }
  getSize(){
    return this.size;
  }
  
  // function to add at the beginning
  prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node;
    }else{
      node.next=this.head;
      this.head=node;
    }this.size++;
  }
  
  // function to add at the last
  append(value){
    const node=new Node(value)
    if(this.isEmpty()){
      this.head=node;
    }else{
      let current=this.head;
      while(current.next){
        current=current.next;
      }
      current.next=node;
      
    }this.size++;
  }
  
  // function to remove a node using index
  remove(index){
    let removeNode;
    if(this.isEmpty()){
      console.log("List is empty");
      return false;
    }
    if(index<0 || index>=this.size){
      console.log("Not a valid delete operation")
      return -1
    }
    if(index===0){
      this.head=this.head.next;
      this.size--
    }
    else{
      let current=this.head;
      for(let i=0;i<index-1;i++){
        current=current.next;
      }
      removeNode=current.next;
      current.next=removeNode.next;
      this.size--;
      
    }
    return this.head;
  }
  
   // function to remove a node using value
  removeValue(value){
    let removeNode;
    if(this.isEmpty()){
      console.log("List is empty");
      return -1;
    }
    if(this.head.value===value){
      this.head=this.head.next;
      this.size--
    }else{
      let current=this.head;
      while(current.next && current.next.value!=value){
        current=current.next;
      }
      if(current.next){
        removeNode=current.next;
        current.next=removeNode.next;
        this.size--;
      }else{
        console.log("Value is not in list")
      }
    }
  }
  
  
  // function to display the LL
  display(){
    if(this.isEmpty()){
      console.log('List is empty');
      return;
    }
    let current=this.head;
    let getValues='';
    while(current){
      getValues+= `${current.value} `
      current=current.next;
    }
    console.log("Linked list is: ", getValues)
  }
  
  
  //Function to search a value in LL
  
  search(value){
    if(this.isEmpty()){
      console.log('Empty list')
      return;
    }
    
    let current=this.head;
    let i=1;
    while(current!=null){
    
      if(current.value===value){
        console.log(`${value} found at position ${i}`)
        return;
      }
      current=current.next;
      i++;
    }
    console.log("Not found")
    return -1;
  }
  
  
  
  // function to find the middle element in LL 
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

// function to reverse the linked list 
reverse(){
  if(this.isEmpty()){
    console.log("Empty list");
    return;
  }
  let curr=this.head;
  let prev=null;
  
  while(curr){
    let next=curr.next;
    curr.next=prev;
    prev=curr;
    curr=next;
  }
  this.head=prev;
  //console.log(this.head)
}




}


const list=new Linkedlist()
list.prepend(8);
list.append(7);
list.prepend(4);
list.append(1);
list.append(12);
list.prepend(17);
list.prepend(16);
list.display()
list.search(1);
list.remove(1);
list.removeValue(1)
list.search(1);
list.display();
list.findMiddle();
list.reverse();
list.display();

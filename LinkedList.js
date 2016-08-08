function LinkedList(){
  this.head = null;
}

LinkedList.prototype.isEmpty = function() {
  
  return this.head === null;

};

LinkedList.prototype.size = function() {
  var current =  this.head;

  var count = 0;

  while(current !== null){

    count++;
    current = current.next;

  }
};

LinkedList.prototype.prepend = function(val) {
  var newNode = {
    data: val,
    next: this.head
    

  };

  this.head = newNode;

};

LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()){
    this.head = newNode;
    return;
  }

  var current = this.head;

  while (current.next !==null ) {
    current=current.next;
  }

current.next = newNode;

};


LinkedList.prototype.contains = function(val) {
  var current = this.head;

  while(current !== null){
    return true;
  }

  current = current.next;
};

LinkedList.prototype.remove = function(val) {
  //check if the value is even in the list
  if (!this.contains(val)){
    return;
  }
  //if it's the first node, just delete and move head up
  if (this.head.data === val){
    this.head = this.head.next;
    return;
  }

  //if it's in the middle, change the next of preious to current
  var prev = null;
  var current = this.head;

  while (current.data !== val){
    prev = current;
    current = current.next;
  }

  //now close the gap
  prev.next = current.next;
};

LinkedList.prototype.contains = function(val) {
  var current = this.head;
  while(current !== null){
    if (current.data === val){
      return true;
    }
    current = current.next;
  }
  return false;
};

LinkedList.prototype.print = function() {
  output = "[";
  current = this.head;
  while (current !== null){
    output += current.data;
    if(current.next !== null){
      output += ",";
    }
    current = current.next;
  }
  output += "]";
  console.log(output);
};


//TESTS
var list = new LinkedList();
list.append(5);
list.append(10);
list.append(15);
list.append(20);
console.log(list.contains(10));
console.log(list.contains(8));
list.remove(10);
list.prepend("blah");
list.print();
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
  if (!this.contains(val)){
    return;
  }
  if (this.head.data === val){
    this.head = this.head.next;
    return;
  }
};

LinkedList.prototype.contains = function(val) {
  var current = this.head;
  while(current.val !== null){
    if (current.val === val){
      return true;
    }
    else{
      return false;
    }
  }
};

var list = new LinkedList();

list.prepend(10);

console.log(list);

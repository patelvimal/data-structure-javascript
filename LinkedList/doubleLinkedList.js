function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(prev, value, next) {
  this.prev = prev;
  this.value = value;
  this.next = next;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(null, value, this.head);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(this.tail, value, null);
  if (this.tail) this.tail.prev = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.head.next = null;
  else this.head = null;
  return val;
};


LinkedList.prototype.addItem = function (value,index) {
  var node = this.head;
  var currentIndex = 0;
  while (node) {
    if (currentIndex === index) {
      console.log(node);
      var newNode = new Node(node.prev,value,node.next);
      node.next = newNode;
    } else {
      node = node.next;
    }
    
    currentIndex +=1;
  }
};


LinkedList.prototype.searchValue = function (val) {
  var node = this.head;
  while (node) {
    if (this.node.value == val) return val;
    //else if (this.head.next == null) return null;
    node = this.node.next;
  }
};


LinkedList.prototype.indexOf = function (val) {
  var node = this.head;
  var result =[];
  var index = 0;
  while (node) {
    if (node.value === val) {
      result.push(index);
    }
    node = node.next;
    index +=1;
  }
  return result;
};

var linkedList = new LinkedList();
linkedList.addToHead(100);
linkedList.addToHead(200);
linkedList.addToHead(300);
linkedList.addItem(150,1);
//linkedList.addToTail(300);
//linkedList.addToTail(400);
//var value = linkedList.searchValue(300);
//console.log(value);
console.log(linkedList);

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

var linkedList = new LinkedList();
linkedList.addToHead(100);
linkedList.addToHead(200);

console.log(linkedList);

const { link } = require("fs");

function LinkedList() {
    this.head = null;
    this.count = 0;
}

function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.insertAtHead = function (value) {
    var newNode = new Node(value, this.head);
    this.head = newNode;
    this.count++;
};

LinkedList.prototype.insertAtTail = function (value) {
    var newNode = new Node(value, null);
    if (!this.head) {
        this.head = newNode;
    } else {
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.count++;
};

LinkedList.prototype.insertAt = function (index, value) {
    if (index < 0 || index > this.count) return null;
    var newNode = new Node(value, null);
    if (index == 0) return this.insertAtHead(value);

    var current = this.head;
    var prev = null;
    var count = 0;
    while (count < index) {
        prev = current;
        count++;
        current = current.next;
    }
    newNode.next = current;
    prev.next = newNode;
    this.count++;
};

LinkedList.prototype.reverse = function () {
   
    if (!this.head || !this.head.next) {
        return null;
    }
    var current = this.head;
    var next = null;
    var prev = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
};

LinkedList.prototype.merge = function(linkedList){
    var current = this.head;
    while(current.next) {
        current = current.next;
    }
    current.next = linkedList.head;
    this.count = this.count + linkedList.count;
}

LinkedList.prototype.print = function () {
    var output = [];
    var currentNode = this.head;
    while (currentNode) {
        output.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return output.join(' --> ');
};

module.exports = LinkedList;

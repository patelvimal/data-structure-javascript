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
    if(!this.head) {
        this.head = newNode
    } else {
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.count++;
};

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
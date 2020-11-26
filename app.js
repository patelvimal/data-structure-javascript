const { link } = require('fs');
const LinkedList = require('./LinkedList/single');

const ll = new LinkedList();
// ll.insertAtHead(100);
// ll.insertAtHead(200);
ll.insertAtTail(100);
ll.insertAtTail(200);
ll.insertAtTail(300);
ll.insertAt(1,150);
ll.reverse();
const result = ll.print();
console.log(result);
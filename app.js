const LinkedList = require('./LinkedList/single');

const ll = new LinkedList();
// ll.insertAtHead(100);
// ll.insertAtHead(200);
ll.insertAtTail(100);
ll.insertAtTail(200);
const result = ll.print();
console.log(ll);
console.log(result);
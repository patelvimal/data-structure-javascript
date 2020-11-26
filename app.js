const { link } = require('fs');
const LinkedList = require('./LinkedList/single');

const ll1 = new LinkedList();
ll1.insertAtTail(100);
ll1.insertAtTail(200);
const ll2 = new LinkedList();
ll2.insertAtTail(300);
ll2.insertAtTail(400);
const result1 = ll1.print();
const result2 = ll2.print();
console.log(result1);
console.log(result2);

 ll1.merge(ll2);
 const result3 = ll1.print();
console.log(result3);
const { expect } = require('@jest/globals');
const LinkedList = require('./single');

describe('#insertAtHead', () => {
    test('should insert element at the begining of the list.', () => {
        const ll = new LinkedList();
        ll.insertAtHead(100);
        const oldHead = ll.head;
        ll.insertAtHead(200);

        expect(ll.head.value).toBe(200);
        expect(ll.head.next).toBe(oldHead);
        expect(ll.count).toBe(2);
    });
});

describe('#insertAtTail', () => {
    test('should insert element at the end of the list.', () => {
        const ll = new LinkedList();
        ll.insertAtTail(100);
        ll.insertAtTail(200);
        expect(ll.head.value).toBe(100);
        expect(ll.head.next.value).toBe(200);
        expect(ll.count).toBe(2);
    });
});


describe('#print', () => {
    test('should return all the elemtns of the list.', () => {
        const ll = new LinkedList();
        ll.insertAtHead(100);
        ll.insertAtHead(200);
        ll.insertAtHead(300);

        const output = ll.print();
        const expectedValue = '300 --> 200 --> 100';
        expect(output).toBe(expectedValue);
    });
});

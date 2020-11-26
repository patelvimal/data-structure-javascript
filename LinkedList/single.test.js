const { expect } = require('@jest/globals');
const { link } = require('fs');
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
        ll.insertAtTail(300);
        expect(ll.head.value).toBe(100);
        expect(ll.head.next.value).toBe(200);
        expect(ll.count).toBe(3);
    });
});


describe('#insertAt', () => {
    test('with empty list and index less than 0 should not insert element.', () => {
        const ll = new LinkedList();
        ll.insertAt(-1,10);
        expect(ll.count).toBe(0);
    });
    test('with empty list and index greater than total size of LinkedList should not insert element.', () => {
        const ll = new LinkedList();
        ll.insertAt(3,10);
        expect(ll.count).toBe(0);
    });
    test('with index less than 0 should not insert element.', () => {
        const ll = new LinkedList();
        ll.insertAtHead(100);
        ll.insertAt(-1,10);
        expect(ll.count).toBe(1);
    });
    test('with index greater than total size of LinkedList should not insert element.', () => {
        const ll = new LinkedList();
        ll.insertAtHead(100);
        ll.insertAtHead(200);
        ll.insertAt(3,30);
        expect(ll.count).toBe(2);
    });
    test('with index equal to total size of LinkedList should  insert element at the end.', () => {
        const ll = new LinkedList();
        ll.insertAtHead(100);
        ll.insertAtHead(200);
        ll.insertAt(2,30);
        expect(ll.count).toBe(3);
    });
    test('with index 0 should  insert element as head.', () => {
        const ll = new LinkedList();
        ll.insertAt(0,30);
        expect(ll.count).toBe(1);
    });
});

describe('#reverse', () => {
    test('should reverse a list', () => {
        const ll = new LinkedList();
        ll.insertAtHead(100);
        ll.insertAtHead(200);
        ll.insertAtHead(300);
        ll.reverse();
        const output = ll.print();
        const expectedValue = '100 --> 200 --> 300';
        expect(output).toBe(expectedValue);
    })
    
    test('should not do anthing if list is empty', () => {
        const ll = new LinkedList();
        ll.reverse();
        const output = ll.print();
        expect(output).toBe('');
    })
    
})

describe('#merge', () => {
    test('should merge 2 linkedList', () => {
        const ll1 = new LinkedList();
        ll1.insertAtTail(100);
        ll1.insertAtTail(200);
        const ll2 = new LinkedList();
        ll2.insertAtTail(300);
        ll2.insertAtTail(400);
        ll1.merge(ll2);
        const output = ll1.print();
        const expectedValue = '100 --> 200 --> 300 --> 400';
        expect(output).toBe(expectedValue);
        expect(ll1.count).toBe(4);
    })

    test('should merge 2 linkedList if one of them empty', () => {
        const ll1 = new LinkedList();
        ll1.insertAtTail(100);
        ll1.insertAtTail(200);
        const ll2 = new LinkedList();
        ll1.merge(ll2);
        const output = ll1.print();
        const expectedValue = '100 --> 200';
        expect(output).toBe(expectedValue);
        expect(ll1.count).toBe(2);
    })
    
})


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

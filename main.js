class Node {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let current = this.head;
    let counter = 0;

    if (index >= this.length || !current) return -1;
    if (index === 0) return current.val;
    if (!index) return current;
    
    for (let i = 0; i < index; i++) {
        if (current.next === null) return;
        current = current.next;
    }
    
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;  
    this.length ++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
//     let current = this.head;
    
//     if (!current) return this.addAtHead(val);
    
//     while (current.next !== null) {
//         current = current.next;
//     }
    
//     let node = new Node(val);
//     current.next = node;
    
    this.addAtIndex(this.length, val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let counter = 0;
    let current = this.head;
    
    if (index === 0) return this.addAtHead(val);
    if (!current) return;
    // if (index >= length) return this.addAtTail(val);
    
    while(counter < index - 1) {
        if (!current.next) return current;
        current = current.next;
        counter ++;
    }
    
    let node = new Node(val, current.next)
    current.next = node;
    this.length ++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    this.length --;
};


// Reorder in ODD and EVEN list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) return head;
    let a = head;
    let b = head.next;
    let t = b;
    
    while (b && b.next !== null) {
        a.next = b.next;
        a = a.next;
        
        b.next = a.next;
        b = b.next;
    }

    a.next = t

    return head;
};

// REMOVE ELEMENTS

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {   
     let newList = new ListNode(null,head);
     let curr = newList;

     while (curr.next !== null) {
         if (curr.next.val === val) {
             curr.next = curr.next.next;
         } else {
            curr = curr.next;
         }
     }
    
     return newList.next;
};

// REVERSE LINKED LIST
// In this algorithm, each node will be moved exactly once.
// Therefore, the time complexity is O(N), where N is the length of the linked list. We only use constant extra space so the space complexity is O(1).
// attaching this code to the Linked List code might require adapation in the "this.head" object, for exemple: "obj.head = prev"

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let cur = head;
    let next;
    
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;
};

// another approach

function reverseList(head: ListNode | null): ListNode | null {
  let [prev, cur] = [null, head];

  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next];
  }

  return prev;
}


// GET LENGTH

// MyLinkedList.prototype.getLength = function() {
//     let len = 0, cur = this.head;
//     while (cur !== null) {
//         cur = cur.next;
//         len++;
//     }
//     return len;
// };

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

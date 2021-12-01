class Node {
    constructor(val, next) {
        this.val = val == undefined ? 0 : val;
        this.next = next == undefined ? null : next;
    }
}

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let current = this.head;
    let counter = 0;
    let length = this.getLength();

    if (index >= length) return -1;
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
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let current = this.head;
    
    if (!current) return this.addAtHead(val);
    
    while (current.next !== null) {
        current = current.next;
    }
    
    let node = new Node(val);
    current.next = node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let counter = 0;
    let current = this.head;
    let length = this.getLength(); 
    
    if (index === 0) return this.addAtHead(val);
    if (!current) return;
    if (index >= length) return this.addAtTail(val);
    
    while(counter < index - 1) {
        if (!current.next) return current;
        current = current.next;
        counter ++;
    }
    
    let node = new Node(val, current.next)
    current.next = node;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.getLength()) return;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

MyLinkedList.prototype.getLength = function() {
    let len = 0, cur = this.head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
};

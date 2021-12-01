var MyLinkedList = function() {
    this.list = []
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {    
    if (this.list.length > index) {
        return this.list[index]
    } else {
        return -1
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.list.unshift(val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
     this.list.push(val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (this.list.length > index) {
        this.list.splice(index, 0, val)
    } else if (this.list.length === index) {
        this.addAtTail(val)
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.list.length > index) {
        this.list.splice(index, 1)
    }
};

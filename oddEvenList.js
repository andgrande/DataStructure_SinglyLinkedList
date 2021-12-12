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

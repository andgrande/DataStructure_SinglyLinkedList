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

// attaching this code to the Linked List code might require adapation in the "this.head" object, for exemple: "obj.head = prev"

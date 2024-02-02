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
var reverseList = function(head) {
    
    let list = null;
    let current = head;

    while(current != null) {
        let next_node = current.next;
        current.next = list;
        list = current;
        current = next_node;
    }


    return list;
};

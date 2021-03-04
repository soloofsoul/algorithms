/*
Given a linked list, swap every two adjacent nodes and return its head.

Example 1
1 -> 2 -> 3 -> 4
||
2 -> 1 -> 4 -> 3

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]


Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100


Follow up: Can you solve the problem without modifying the values in the list's nodes? (i.e., Only nodes themselves may be changed.)
 */

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
var swapPairs = function(head) {
  if (head && head.next) {
    const temp = head.val;
    head.val = head.next.val;
    head.next.val = temp;

    if (head.next.next)
      swapPairs(head.next.next);
  }

  return head;
};
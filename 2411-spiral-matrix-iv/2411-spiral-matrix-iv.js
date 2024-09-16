/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}

 3   0   2   6   8

 5   0  -1  -1   1

 5   2  -4   9   7

 */
var spiralMatrix = function(m, n, head) {
    const arr = new Array(m)
    for(let i=0; i<m; i++) {
        arr[i] = new Array(n).fill(-1)
    }
    let top = 0, bottom = m-1
    let left = 0, right = n-1
    let i = 0
    while(head != null) {
        if(top <= bottom){
            for(let i=left; i<=right && head != null; i++) {
                arr[top][i] = head.val
                head = head.next
            }
            top++
        }
        
        if(head === null) break

        if(left <= right) {
            for(let i=top; i<=bottom && head != null; i++) {
                arr[i][right] = head.val
                head = head.next
            }
            right--
        }
        
        if(head === null) break

        if(top <= bottom) {
            for(let i=right; i>=left && head != null; i--) {
                arr[bottom][i] = head.val
                head = head.next
            }
            bottom--
        }

        if(head === null) break

        if(left <= right) {
            for(let i=bottom; i>=top && head != null; i--) {
                arr[i][left] = head.val
                head = head.next
            }
            left++
        }
    }
    return arr
};
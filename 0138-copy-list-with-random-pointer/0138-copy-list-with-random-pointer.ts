/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    let curr = head
    const map = new Map()
    while(curr != null) {
        const clone = new _Node(curr.val)
        map.set(curr, clone)
        curr = curr.next
    }
    
    curr = head
    while(curr != null) {
        const clone = map.get(curr)
        const nextCpy = map.get(curr.next) || null
        const randomCpy = map.get(curr.random) || null
        clone.next = nextCpy
        clone.random = randomCpy
        curr = curr.next
    }
    return map.get(head)
};
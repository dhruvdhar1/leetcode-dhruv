/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length%groupSize !== 0) return false
    const minHeap = Array.from(new Set([...hand])).sort((a,b) => b-a)
    const map = new Map()
    for(let i=0; i<hand.length; i++) {
        if(!map.has(hand[i])) {
            map.set(hand[i], 0)
        }
        const freq = map.get(hand[i])
        map.set(hand[i], freq+1)
    }
    let num = hand.length/groupSize
    while(num > 0) {
        const min = minHeap[minHeap.length-1]
        for(i=min; i<min+groupSize; i++) {
            if(!map.has(i)) {
                return false
            }

            map.set(i, map.get(i)-1)
            if(map.get(i) === 0) {
                if(minHeap[minHeap.length-1] === i) {
                    minHeap.pop()
                    map.delete(i)
                } else {
                    return false
                }
            }
        }
        num--
    }
    return true
};
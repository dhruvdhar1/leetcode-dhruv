/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const max = arr[arr.length-1]
    const set = new Set(arr)
    for(let i=1; i<=max; i++) {
        if(!set.has(i)) {
            k--
        }
        if(k === 0) {
            return i
        }
    }
    if(k > 0) {
        return max+k
    }
};
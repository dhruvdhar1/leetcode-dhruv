/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let prev = 0
    let diff = 0
    let l = 0
    while(l < arr.length) {
        if(arr[l] - prev > 1) {
            const d = arr[l] - prev - 1
            diff += d
        }
        prev = arr[l++]
        if(diff >= k) break
    }
    if(diff < k) {
        return arr[arr.length-1] + (k-diff)
    }
    return prev - (diff-k+1)
};
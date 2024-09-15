/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function binarySearch(arr, target) {
    let l = 0, r = arr.length-1, ans = -1
    while(l <= r) {
        const mid = l + parseInt((r-l)/2)
        if(arr[mid] >= target) {
            ans = mid
            r = mid-1
        } else {
            l = mid+1
        }
    }
    return ans
}
var findClosestElements = function(arr, k, x) {
    const pivot = binarySearch(arr, x)
    let l = pivot, r = pivot
    if(l === 0) return arr.slice(0, k)
    if(pivot === -1) return arr.slice(arr.length-k)
    while(k>0) {
        if(r>= arr.length || (x-arr[l-1] <= arr[r]-x)) {
            l--
        } else {
            r++
        }
        k--;
    }
    const res = arr.slice(l, r)
    return res
};
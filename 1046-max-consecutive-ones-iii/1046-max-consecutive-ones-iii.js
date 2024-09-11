/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeros = 0
    let maxlen = 0
    let l=0, r=0

    while(r < nums.length) {
        if(nums[r] === 0) {
            zeros++
        }
        if(zeros > k) {
            while(zeros > k) {
                if(nums[l] === 0) {
                    zeros--
                }
                l++
            }
        }
        r++
        maxlen = Math.max(maxlen, r-l)
    }
    return maxlen
};
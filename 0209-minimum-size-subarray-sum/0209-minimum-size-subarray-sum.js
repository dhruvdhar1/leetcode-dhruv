/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l=0, r=0, sum = 0
    let size = Number.MAX_SAFE_INTEGER
    while(r <= nums.length) {
        if(sum >= target) {
            size = Math.min(size, r-l)
            sum -= nums[l]
            l++
        } else {
            sum += nums[r]
            r++
        }
    }
    return size == Number.MAX_SAFE_INTEGER ? 0 : size
};
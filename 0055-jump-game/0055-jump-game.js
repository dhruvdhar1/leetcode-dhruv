/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let currTarget = nums.length-1
    let p = nums.length-1

    while(p >= 0) {
        if(p+nums[p] >= currTarget) {
            currTarget = p
        }
        p--
    }
    return currTarget === 0
};
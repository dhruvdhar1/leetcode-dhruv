/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let l=0, r=0
    while(r < nums.length-1) {
        let farthest = 0
        for(let i=l; i<r+1; i++) {
            farthest = Math.max(farthest, i+nums[i])
        }
        l = r+1
        r = farthest
        if(r<l) return false
    }
    return true
};
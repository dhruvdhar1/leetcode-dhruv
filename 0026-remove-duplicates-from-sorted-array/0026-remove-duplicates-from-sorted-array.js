/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l=0, r=0
    if(nums.length <= 1) return 1
    while(r < nums.length) {

        while(r < nums.length && nums[l] === nums[r]) {
            r++
        }
        if(r >= nums.length) return l+1
        nums[l+1] = nums[r]
        l++
        r++
    }
    return l+1
};
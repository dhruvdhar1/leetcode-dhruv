/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l=0, r=1
    while(r < nums.length) {
        let p = r
        while(p < nums.length && nums[p] <= nums[l]) {
            p++
        }
        if(p >= nums.length) return l+1
        const temp = nums[r]
        nums[r] = nums[p]
        nums[p] = temp
        l++
        r=l+1
    }
    return l+1
};
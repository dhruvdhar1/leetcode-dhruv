/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

    {
    }

    [0,1,2]
       l            
       r
       m
 */
var sortColors = function(nums) {
    let l = 0, m = 0, r = nums.length-1
    while(m<=r) {
        if(nums[m] === 0) {
            const temp = nums[l]
            nums[l] = nums[m]
            nums[m] = temp
            l++
            m++
        } else if(nums[m] === 2) {
            const temp = nums[r]
            nums[r] = nums[m]
            nums[m] = temp
            r--
            // m--
        } else {
            m++
        }
    }
};
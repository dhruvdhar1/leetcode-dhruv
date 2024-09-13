/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0, r = nums.length-1
    let i = 0
    while(i <= r) {
        if(nums[i] === 0) {
            const temp = nums[i]
            nums[i] = nums[l]
            nums[l] = temp
            l++
        } else if(nums[i] === 2) {
            const temp = nums[i]
            nums[i] = nums[r]
            nums[r] = temp
            r--
            i--
        }
        i++
    }
};
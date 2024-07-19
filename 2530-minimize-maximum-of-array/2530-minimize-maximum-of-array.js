/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let sum = nums[0]
    for(let i=1; i<nums.length; i++) {
        sum += nums[i]
        nums[0] = Math.max(nums[0], Math.ceil(sum/(i+1)))
    }
    return nums[0]
};
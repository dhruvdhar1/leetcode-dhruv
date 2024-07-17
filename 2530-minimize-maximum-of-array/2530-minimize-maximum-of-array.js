/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let res = nums[0]
    let sum = nums[0]
    for(let i=1; i<nums.length; i++) {
        sum += nums[i]
        const max = Math.ceil(sum/(i+1))
        res = Math.max(res, max)
    }
    return res
};
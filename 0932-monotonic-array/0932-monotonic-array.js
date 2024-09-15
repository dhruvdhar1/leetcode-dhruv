/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isIncreasing(nums) {
    for(let i=1; i<nums.length; i++) {
        if(nums[i-1] > nums[i]) return false
    }
    return true
}
function isDecreasing(nums) {
    for(let i=1; i<nums.length; i++) {
        if(nums[i-1] < nums[i]) return false
    }
    return true
}
var isMonotonic = function(nums) {
    return isIncreasing(nums) || isDecreasing(nums)
};
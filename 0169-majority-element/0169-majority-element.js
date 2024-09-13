/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = nums[0]
    let count = 1
    for(let i=1; i<nums.length; i++) {
        if(nums[i] === res) {
            count++
        } else {
            count--
        }

        if(count < 0) {
            res = nums[i]
            count = 1
        }
    }
    return res
};
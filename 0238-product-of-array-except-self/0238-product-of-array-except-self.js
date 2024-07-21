/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prod = 1
    let zero = 0
    let res = []
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) {
            zero++
            continue
        }
        prod *= nums[i]
    }
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0 && zero === 1) {
            res[i] = prod
            continue
        } 
        if(zero > 1) {
            res[i] = 0
        } else if(zero === 1) {
            res[i] = 0
        } else {
            res[i] = prod/nums[i]
        }
    }
    return res
};
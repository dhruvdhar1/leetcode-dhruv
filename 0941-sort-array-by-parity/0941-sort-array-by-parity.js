/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let l=0, r=nums.length-1
    while(l < r) {
        if(nums[l] % 2 != 0 && nums[r] % 2 === 0) {
            const temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
            l++
            r--
        } else if(nums[l] % 2 === 0) {
            l++
        } else {
            r--
        }
    }
    return nums
};
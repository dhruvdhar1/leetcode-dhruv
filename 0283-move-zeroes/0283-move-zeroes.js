/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = (nums, i, j) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
var moveZeroes = function(nums) {
    let l=0, r=1
    const len = nums.length
    while(r<len) {
        r = l+1
        if(nums[l] === 0) {
            while(nums[r] == 0) {
                r++
            }
            if(r < len) {
                swap(nums, l, r)
            }
        }
        l++
    }
};
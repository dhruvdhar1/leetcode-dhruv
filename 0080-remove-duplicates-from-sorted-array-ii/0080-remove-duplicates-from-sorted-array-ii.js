/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0
    for(const num of nums) {
        if(i==0 || i==1 || nums[i-2] !== num) {
            nums[i] = num
            i++
        }
    }
    return i
};
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    let l = 0
    let r = nums.length-1

    while(l < r) {
        const m = Number.parseInt(l + (r-l)/2) 
        if(nums[m] > nums[m+1]) {
            return nums[m+1]
        }  
        if(nums[l] > nums[r]) {
            //arr is rotated
            if(nums[m] > nums[r]) {
                //min in right subarr
                l = m+1
            } else {
                r = m
            }
        } else {
            // not rotated
            r = m
        }
    }
    return nums[l]
};
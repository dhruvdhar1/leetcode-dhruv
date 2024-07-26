/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0, r=nums.length-1

    while(l<r) {
        const mid = l + parseInt((r-l)/2)
        if(mid > 0 && nums[mid-1] > nums[mid]) return nums[mid]
        if(nums[l] < nums[r]) {
            r = mid-1
        } else {
            if(nums[l] > nums[mid]) {
                r = mid-1
            } else {
                l = mid+1
            }
        }
    }
    return nums[l]
};
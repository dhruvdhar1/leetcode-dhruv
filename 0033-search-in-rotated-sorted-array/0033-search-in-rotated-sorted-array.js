/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0, r=nums.length-1
    while(l<r) {
        const mid = l + parseInt((r-l)/2)
        if(nums[mid] === target) return mid
        if(nums[l] <= nums[r]) {
            if(target < nums[mid]) {
                r = mid-1
            } else {
                l = mid+1
            }
        } else {
            if(nums[l] <= nums[mid]) {
                if(target < nums[mid] && target >= nums[l]) {
                    r = mid-1
                } else {
                    l = mid+1
                }
            } else {
                if(target > nums[mid] && target <= nums[r]) {
                    l = mid+1
                } else {
                    r = mid-1
                }
            }
        }
    }
    // console.log("l: ", l)
    return nums[l] === target ? l : -1
};
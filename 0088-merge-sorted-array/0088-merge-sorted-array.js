/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l = 0, r = nums1.length-nums2.length-1
    while(l < r) {
        const temp = nums1[r]
        nums1[r] = nums1[l]
        nums1[l] = temp
        l++
        r--
    }
    r = nums1.length-nums2.length-1
    console.log("n1: ", nums1, " : ", r)
    l = 0
    let p = nums1.length-1
    while(l<nums2.length && r >= 0) {
        if(nums1[r] <= nums2[l]) {
            nums1[p--] = nums1[r]
            r--
        } else {
            nums1[p--] = nums2[l]
            l++
        }
    }
    // p = 0
    while(l < nums2.length) {
        nums1[p--] = nums2[l++]
    }
    nums1.reverse()
};
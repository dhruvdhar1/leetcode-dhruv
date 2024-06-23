/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = nums1.length - 1
    let p = m-1
    let q = n-1
    while(p >= 0 && q >= 0) {
        if(nums1[p] >= nums2[q]) {
            nums1[i--] = nums1[p--]
        } else {
            nums1[i--] = nums2[q--]
        }
    }

    while(q >= 0) {
        nums1[i--] = nums2[q--]
    }
};
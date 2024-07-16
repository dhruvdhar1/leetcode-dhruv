/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
    let p = 0
    let add = 0, sub = 0
    while(p < nums1.length) {
        if(nums1[p] > nums2[p]) {
            if((nums1[p] - nums2[p]) % k !== 0) return -1
            sub += ((nums1[p] - nums2[p]) / k)
            nums1[p] = nums2[p]
        }
        if(nums1[p] < nums2[p]) {
            if((nums2[p] - nums1[p]) % k !== 0) return -1
            add += ((nums2[p] - nums1[p]) / k)
            nums1[p] = nums2[p]
        }
        p++
    }
    // console.log(add, " : ", sub)
    return add === sub ? add : -1
};
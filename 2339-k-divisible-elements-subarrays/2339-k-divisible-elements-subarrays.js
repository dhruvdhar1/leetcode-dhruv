/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    const set = new Set()
    for(let i=0; i<nums.length; i++) {
        let subarr = []
        let count = 0
        for(let j=i; j<nums.length; j++) {
            if(nums[j]%p === 0) count++
            if(count > k) break
            subarr.push(nums[j])
            set.add(String(subarr))
        }
    }
    return set.size
};
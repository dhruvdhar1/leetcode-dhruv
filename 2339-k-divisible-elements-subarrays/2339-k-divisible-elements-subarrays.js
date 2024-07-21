/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    const set = new Set()
    for(let i=0; i<nums.length; i++) {
        const subarr = []
        let count = 0
        for(let j=i; j<nums.length; j++) {
            if(nums[j]%p === 0) count++
            if(count > k) break
            const tmp = String([...subarr, nums[j]])
            set.add(tmp)
            subarr.push(nums[j])
        }
    }
    return set.size
};
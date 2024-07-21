/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
    let res=0
    const set = new Set()
    for(let i=0; i<nums.length; i++) {
        const subarr = []
        for(let j=i; j<nums.length; j++) {
            const tmp = String([...subarr, nums[j]])
            if(!set.has(tmp)) {
                set.add(tmp)
                subarr.push(nums[j])
                let count = 0
                for(const n of subarr) {
                    if(n%p === 0) count++
                }
                if(count <= k) res++
            } else {
                subarr.push(nums[j])
            }
        }
    }
    // console.log("tttt: ", set)
    return res
};
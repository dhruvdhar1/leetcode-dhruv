/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function(nums) {
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], [])
        }
        map.get(nums[i]).push(i)
    }
    let res = 100000000
    for(const [key, val] of map) {
        let max = -1
        for(let i=0; i<val.length; i++) {
            const start = val[i]
            let time;
            if(i === val.length-1) {
                time = Math.ceil((val[0]-0+nums.length-1-val[i]) / 2)
            } else {
                const end = val[i+1]
                time = Math.ceil((end-start-1)/2)
            }
            max = Math.max(max, time)
        }
        console.log("key: ", key, " : ", max)
        res = Math.min(res, max)
    }
    return res
};
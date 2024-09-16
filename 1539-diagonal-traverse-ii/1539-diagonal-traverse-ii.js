/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const res = []
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        for(j=0; j<nums[i].length; j++) {
            if(!map.has(i+j)) {
                map.set(i+j, [])
            }
            map.get(i+j).push(nums[i][j])
        }
    }
    for(const [key, list] of map) {
        while(list.length > 0) {
            res.push(list.pop())
        }
    }
    return res
};
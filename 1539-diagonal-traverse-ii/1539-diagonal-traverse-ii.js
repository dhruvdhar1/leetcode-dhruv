/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let maxCols = -1
    const res = []
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        maxCols = Math.max(maxCols, nums[i].length)
        for(j=0; j<nums[i].length; j++) {
            if(!map.has(i+j)) {
                map.set(i+j, [])
            }
            map.get(i+j).push(nums[i][j])
        }
    }
    // console.log(map)
    // const range = nums.length*maxCols
    for(const [key, list] of map) {
        // const list = map.get(i) || []
        while(list.length > 0) {
            res.push(list.pop())
        }
    }
    return res
};
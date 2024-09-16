/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const res = []
    const q = new Queue([[0, 0]])
    while(q.size() > 0) {
        const [x, y] = q.dequeue()
        // console.log(x, y)
        res.push(nums[x][y])
        const upRightInd = [x-1, y+1]
        if(y === 0 && x+1 < nums.length) {
            q.enqueue([x+1, y])
        }
        if(y+1 < nums[x].length) {
            q.enqueue([x, y+1])
        }
    }
    return res
};
class Solution {
    nums = null
    constructor(nums: number[]) {
        this.nums = nums
    }

    pick(target: number): number {
        let res = 0
        let count = 0
        for(let i=0; i<this.nums.length; i++) {
            if(this.nums[i] === target) {
                count++
                const rand = Math.ceil(Math.random() * count)
                if(rand === count) {
                    res = i
                }
            }
        }
        return res
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
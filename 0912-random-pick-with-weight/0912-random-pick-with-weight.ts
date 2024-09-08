class Solution {
    nums = []
    constructor(w: number[]) {
        let sum = 0
        for(let i=0; i<w.length; i++) {
            sum += w[i]
            this.nums.push(sum)
        }
    }

    pickIndex(): number {
        const last = this.nums[this.nums.length-1]
        const rand = Math.floor(Math.random() * last)
        
        let l=0, r=this.nums.length-1
        while(l<r) {
            const m = l + Math.trunc((r-l)/2)
            if(this.nums[m] <= rand) {
                 l = m + 1
            } else {
                r = m
            }
        }
        return l
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
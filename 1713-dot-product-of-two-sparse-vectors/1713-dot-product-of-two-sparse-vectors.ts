class SparseVector {
    map = null
    constructor(nums: number[]) {
        this.map = new Map()
        for(let i=0; i<nums.length; i++) {
            if(nums[i] !== 0) {
                this.map.set(i, nums[i])
            }
        }
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
		const v1 = this.map
        const v2 = vec.map
        let res = 0
        for(const [key, val] of v1) {
            if(v2.has(key)) {
                res += val * v2.get(key)
            }
        }
        return res
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */
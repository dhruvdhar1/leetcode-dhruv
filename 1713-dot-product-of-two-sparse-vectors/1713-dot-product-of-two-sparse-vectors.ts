class SparseVector {
    mat = null
    constructor(nums: number[]) {
        this.mat = []
        for(let i=0; i<nums.length; i++) {
            if(nums[i] !== 0) {
                this.mat.push([i, nums[i]])
            }
        }
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
		const v1 = this.mat
        const v2 = vec.mat
        let res = 0
        let i=0, j=0
        while(i<v1.length && j<v2.length) {
            if(v1[i][0] === v2[j][0]) {
                res += v1[i][1] * v2[j][1]
                i++
                j++
            } else if(v1[i][0] < v2[j][0]) {
                i++
            } else {
                j++
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
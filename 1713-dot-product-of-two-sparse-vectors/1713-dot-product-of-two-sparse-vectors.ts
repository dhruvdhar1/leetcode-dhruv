class SparseVector {
    v: string = null
    constructor(nums: number[]) {
		const stringified = String(nums)
        this.v = stringified.slice(0, stringified.length)
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
		let i=0, j=0
        const v1 = this.v
        const v2 = vec.v
        let res = 0
        while(i < v1.length && j < v2.length) {
            let num1 = 0, num2 = 0
            while(i < v1.length && v1.charAt(i) !== ',') {
                num1 = num1*10 + parseInt(v1[i])
                i++
            }
            while(j < v2.length && v2.charAt(j) !== ',') {
                num2 = num2*10 + parseInt(v2[j])
                j++
            }
            res += num1*num2
            i++
            j++
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
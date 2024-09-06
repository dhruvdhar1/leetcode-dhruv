class SparseVector {
    v: string = null
    constructor(nums: number[]) {
		let str = ""
        for(const num of nums) {
            str += String(num) + ":"
        }
        this.v = str.slice(0, str.length-1)
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
		let i=0, j=0
        const v1 = this.v
        const v2 = vec.v
        let res = 0
        // console.log("v1: ", v1)
        // console.log("v2: ", v2)
        while(i < v1.length && j < v2.length) {
            let num1 = 0, num2 = 0
            while(i < v1.length && v1.charAt(i) !== ':') {
                num1 = num1*10 + parseInt(v1[i])
                i++
            }
            while(j < v2.length && v2.charAt(j) !== ':') {
                num2 = num2*10 + parseInt(v2[j])
                j++
            }
            // console.log(num1, " : ", num2)
            res += num1*num2
            i++
            j++
            // console.log("i: ", i, " j: ", j)
        }
        return res
        // return 0
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Map()
    const backtrack = (num) => {
        if(num==0) return 1
        if(num<0) return 0

        if(dp.has(num)) {
            // console.log("sssss")
            return dp.get(num)

        }
        const res = backtrack(num-1) + backtrack(num-2)
        dp.set(num, res)
        // console.log(dp)
        return res
    }
    return backtrack(n)
};
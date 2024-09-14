/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let count = 0
    const dp = new Map()

    
    function dfs(i,j) {
        const key = `${i}:${j}`
        if(i >= m || j >= n) return 0
        if(i === m-1 && j === n-1) {
            return 1
        }
        if(dp.has(key)) return dp.get(key)
        const a = dfs(i+1, j)
        const b = dfs(i, j+1)
        dp.set(key, a+b)
        return a+b
    }


    return dfs(0,0)
};
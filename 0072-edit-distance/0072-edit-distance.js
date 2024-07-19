/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // const map = new Map()
    const dp = new Array(word1.length+1).fill(0)
    for(let i=0; i<dp.length; i++) {
        dp[i] = new Array(word2.length+1).fill(0)
    }
    const backtrack = (i, j) => {
        if(i >= word1.length || j >= word2.length) return Math.max(word1.slice(i).length, word2.slice(j).length)
        if(word1.slice(i) === word2.slice(j)) return 0
        if(dp[i][j] !== 0) {
            return dp[i][j]
        }
        let res=null
        if(word1[i] === word2[j]) {
            res = backtrack(i+1, j+1)
        } else {
            res = 1 + Math.min(backtrack(i, j+1), backtrack(i+1, j), backtrack(i+1, j+1))
        }
        dp[i][j] = res
        return res
    }

    return backtrack(0,0)
};
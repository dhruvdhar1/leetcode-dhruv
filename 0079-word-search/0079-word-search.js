/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function dfs(i, j, m, n, ind) {
        const key = `${i}:${j}`
        if(ind >= word.length) return true
        if(i >= m || i < 0 || j >= n || j < 0) return false
        if(board[i][j] !== word[ind]) return false
        const temp = board[i][j]
        board[i][j] = '\0'
        const a = dfs(i+1, j, m, n, ind+1)
        const b = dfs(i-1, j, m, n, ind+1)
        const c = dfs(i, j+1, m, n, ind+1)
        const d = dfs(i, j-1, m, n, ind+1)
        board[i][j] = temp
        return a || b || c || d
    }
    let m = board.length
    let n = board[0].length
    let res = false
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] === word[0]) {
                res = dfs(i, j, m, n, 0)
                if(res) return true
            }
        }
    }
    return false
};
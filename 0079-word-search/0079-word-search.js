
function dfs(i, j, m, n, visited, word, ind, board) {
    const key = `${i}:${j}`
    if(ind >= word.length) return true
    if(i < 0 || j < 0 || i >= m || j >= n 
            || visited.has(key) || word.charAt(ind) !== board[i][j]) {
        return false
    }
    // if(ind == word.length-1 && word.charAt(ind) === board[i][j]) {
    //     return true
    // }

    visited.add(key)
    const a = dfs(i+1, j, m, n, visited, word, ind+1, board)
    const b = dfs(i-1, j, m, n, visited, word, ind+1, board)
    const c = dfs(i, j+1, m, n, visited, word, ind+1, board)
    const d = dfs(i, j-1, m, n, visited, word, ind+1, board)
    visited.delete(key)
    return a || b || c || d
}
var exist = function(board, word) {
    const visited = new Set()
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(board[i][j] === word.charAt(0)) {
                const res = dfs(i, j, board.length, board[0].length, visited, word, 0, board)
                if(res) return true
            }
        }
    }
    return false
};
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function dfs(i, j, m, n, heights, prevHeight, visited) {
    const key = `${i}:${j}`
    if(i < 0 || j < 0 || i >= m || j >= n || visited.has(key) || heights[i][j] < prevHeight) {
        return false
    }

    visited.add(key)
    dfs(i+1, j, m, n, heights, heights[i][j], visited)
    dfs(i, j+1, m, n, heights, heights[i][j], visited)
    dfs(i-1, j, m, n, heights, heights[i][j], visited)
    dfs(i, j-1, m, n, heights, heights[i][j], visited)
}
var pacificAtlantic = function(heights) {
    const m = heights.length
    const n = heights[0].length

    const pacificSet = new Set()
    const atlanticSet = new Set()
    const res = []
    for(i=0; i<m; i++) {
        dfs(i, 0, m, n, heights, -1, pacificSet)
        dfs(i, n-1, m, n, heights, -1, atlanticSet)
    }
    for(i=0; i<n; i++) {
        dfs(0, i, m, n, heights, -1, pacificSet)
        dfs(m-1, i, m, n, heights, -1, atlanticSet)
    }
    // console.log(pacificSet)
    // console.log("-----")
    // console.log(atlanticSet)

    for(const cell of pacificSet) {
        if(atlanticSet.has(cell)) {
            const arr = cell.split(':')
            res.push(arr)
        }
    }
    return res
};
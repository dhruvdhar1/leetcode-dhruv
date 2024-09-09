/**
 * @param {string[]} grid
 * @return {number}
 */

const dfs = (i, j, m, n, visited, grid) => {
    const key = `${i}:${j}`
    if(i < 0 || j < 0 || i >= m || j>= n || visited.has(key) || grid[i][j] === 1) {
        return
    }
    grid[i][j] = 1
    visited.add(key)
    dfs(i+1, j, m, n, visited, grid)
    dfs(i-1, j, m, n, visited, grid)
    dfs(i, j+1, m, n, visited, grid)
    dfs(i, j-1, m, n, visited, grid)
}
var regionsBySlashes = function(grid) {
    const rows = grid.length, cols = grid[0].length
    const scaledRows = 3*rows, scaledCols = 3*cols
    const scaledGrid = new Array(scaledRows)
    for(let i=0; i<scaledRows; i++) {
        scaledGrid[i] = new Array(scaledCols).fill(0)
    }
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid.length; j++) {
            const r = 3*i, c = 3*j
            if(grid[i].charAt(j) === '/') {
                scaledGrid[r][c+2] = 1
                scaledGrid[r+1][c+1] = 1
                scaledGrid[r+2][c] = 1
            } else if (grid[i].charAt(j) === '\\') {
                scaledGrid[r][c] = 1
                scaledGrid[r+1][c+1] = 1
                scaledGrid[r+2][c+2] = 1
            }
        }
    }
    // console.log(scaledGrid)
    let res = 0
    const visited = new Set()
    for(let i=0; i<scaledRows; i++) {
        for(let j=0; j<scaledCols; j++) {
            if(scaledGrid[i][j] === 0) {
                dfs(i, j, scaledRows, scaledCols, visited, scaledGrid)
                res++
            }
        }
    }
    return res
};
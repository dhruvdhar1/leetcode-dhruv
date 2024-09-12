/**
 * @param {number[][]} grid
 * @return {number}
 */

function dfs(i, j, m, n, grid) {
    if(i < 0 || j < 0 || i >= m || j >= n || grid[i][j] != 1) {
        return 0
    }
    grid[i][j] = 2
    const a = dfs(i+1,j,m,n,grid)
    const b = dfs(i,j+1,m,n,grid)
    const c = dfs(i-1,j,m,n,grid)
    const d = dfs(i,j-1,m,n,grid)

    return 1+a+b+c+d
}
var maxAreaOfIsland = function(grid) {
    let m = grid.length, n = grid[0].length
    let maxsize = 0
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 1) {
                const size = dfs(i, j, m, n, grid)
                maxsize = Math.max(maxsize, size)
            }
        }
    }
    return maxsize
};
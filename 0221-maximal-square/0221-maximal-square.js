/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const grid = new Array(m+1)
    for(let i=0; i<m+1; i++) {
        grid[i] = new Array(n+1).fill(0)
        for(let j=0; i<m && j<n; j++) {
            grid[i][j] = parseInt(matrix[i][j])
        }
    }
    let max = 0
    for(let i = m-1; i>=0; i--) {
        for(let j=n-1; j>=0; j--) {
            if(grid[i][j] === 1) {
                const min = Math.min(grid[i][j+1], grid[i+1][j], grid[i+1][j+1])
                grid[i][j] = min+1
                max = Math.max(max, grid[i][j])
            }
        }
    }

    // console.log(grid)
    return max*max

};
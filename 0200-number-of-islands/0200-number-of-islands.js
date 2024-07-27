/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    function dfs(i, j) {
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] !== "1") return
        grid[i][j] = "2"
        dfs(i+1, j)
        dfs(i, j+1)
        dfs(i-1, j)
        dfs(i, j-1)
    }

    let count = 0
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] === "1") {
                count++
                dfs(i, j)
            }
        }
    }
    return count
};
/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
function dfs(i, j, m, n, destination, visited, maze) {
    const key = `${i}:${j}`
    if(i < 0 || j < 0 || i >= m || j>= n || maze[i][j] === 1 || visited.has(key)) {
        return false
    }
    if(i === destination[0] && j === destination[1]) {
        return true
    }
    visited.add(key)
    let up = i, down = i, left = j, right = j
    while(up > 0 && maze[up-1][j] != 1) {
        up--
    }
    while(down < m-1 && maze[down+1][j] != 1) {
        down++
    }

    while(left > 0 && maze[i][left-1] != 1) {
        left--
    }
    while(right < n-1 && maze[i][right+1] != 1) {
        right++
    }

    const a = dfs(up, j, m, n, destination, visited, maze)
    const b = dfs(down, j, m, n, destination, visited, maze)
    const c = dfs(i, left, m, n, destination, visited, maze)
    const d = dfs(i, right, m, n, destination, visited, maze)
    // visited.delete(key)
    return a || b || c || d
}
var hasPath = function(maze, start, destination) {
    const m = maze.length
    const n = maze[0].length
    const visited = new Set()
    return dfs(start[0], start[1], m, n, destination, visited, maze)
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
function colorIsland(grid, i, j, m, n, q) {
    if(i < 0 || j < 0 || i >= m || j >= n 
                || grid[i][j] === 2 || grid[i][j] === 0) {
        return
    }
    grid[i][j] = 2
    q.enqueue([i,j,0])
    colorIsland(grid, i+1, j, m, n, q)
    colorIsland(grid, i, j+1, m, n, q)
    colorIsland(grid, i-1, j, m, n, q)
    colorIsland(grid, i, j-1, m, n, q)
}
var shortestBridge = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let start = null
    let found = false
    const q = new Queue()
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 1) {
                colorIsland(grid, i, j, m, n, q, q)
                found = true
                break
            }
        }
        if(found) {
            break
        }
    }
    const dists = []
    const visited = new Set()
    while(q.size() > 0) {
        const pop = q.dequeue()
        const x = pop[0]
        const y = pop[1]
        const dist = pop[2]
        if(grid[x][y] === 1) {
            dists.push(dist)
        }
        const key = `${x}:${y}`
        if(x-1 >= 0 && !visited.has(key)) {
            q.enqueue([x-1, y, dist+1])
        }
        if(x+1 < m && !visited.has(key)) {
            q.enqueue([x+1, y, dist+1])
        }
        if(y-1 >= 0 && !visited.has(key)) {
            q.enqueue([x, y-1, dist+1])
        }
        if(y+1 <n && !visited.has(key)) {
            q.enqueue([x, y+1, dist+1])
        }
        visited.add(key)
    }
    return Math.min(...dists) - 1
};
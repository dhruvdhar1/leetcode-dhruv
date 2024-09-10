/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const q = [[0,0,1]]
    const visited = new Set()
    visited.add([0,0])

    while(q.length > 0) {
        const pop = q.shift()
        const x = pop[0]
        const y = pop[1]
        const len = pop[2]
        const key = `${x}:${y}`
        if(x < 0 || y < 0 || x >= grid.length || y >= grid.length || grid[x][y] === 1) {
            continue
        }
        if(x === grid.length-1 && y === grid.length-1 && grid[x][y] === 0) {
            return len
        }
        !visited.has(key) && q.push([x+1, y, len+1])
        !visited.has(key) && q.push([x, y+1, len+1])
        !visited.has(key) && q.push([x+1, y+1, len+1])
        !visited.has(key) && q.push([x+1, y-1, len+1])
        !visited.has(key) && q.push([x, y-1, len+1])
        !visited.has(key) && q.push([x-1, y, len+1])
        !visited.has(key) && q.push([x-1, y-1, len+1])
        !visited.has(key) && q.push([x-1, y+1, len+1])
        visited.add(key)
    }
    return -1
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let m = grid.length
    let n = grid[0].length
    const q = new Queue([[0,0,1]])
    const dirs = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    let reached = false
    while(q.size() > 0) {
        const len = q.size()
        const pop = q.dequeue()
        const x = pop[0]
        const y = pop[1]
        const length = pop[2]
        if(x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 1) {
            continue
        }
        if(x === m-1 && y === n-1) {
            reached = true
            return length
        }
        grid[x][y] = 1
        for(const dir of dirs) {
            const dx = dir[0]
            const dy = dir[1]
            q.enqueue([x+dx, y+dy, length+1])
        }
    }
    return -1
};
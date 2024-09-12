/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const q = new Queue()
    const EMPTY_ROOM = Math.pow(2, 31) - 1
    for(let i=0; i<rooms.length; i++) {
        for(let j=0; j<rooms[0].length; j++) {
            if(rooms[i][j] === 0) {
                q.enqueue([i, j])
            }
        }
    }
    while(q.size() > 0) {
        const pop = q.dequeue()
        const x = pop[0], y = pop[1]

        if(x-1 >= 0 && rooms[x-1][y] === EMPTY_ROOM) {
            rooms[x-1][y] = 1 + rooms[x][y]
            q.enqueue([x-1, y])
        }
        if(x+1 < rooms.length && rooms[x+1][y] === EMPTY_ROOM) {
            rooms[x+1][y] = 1 + rooms[x][y]
            q.enqueue([x+1, y])
        }
        if(y-1 >= 0 && rooms[x][y-1] === EMPTY_ROOM) {
            rooms[x][y-1] = 1 + rooms[x][y]
            q.enqueue([x, y-1])
        }
        if(y+1 < rooms[0].length && rooms[x][y+1] === EMPTY_ROOM) {
            rooms[x][y+1] = 1 + rooms[x][y]
            q.enqueue([x, y+1])
        }

    }
};
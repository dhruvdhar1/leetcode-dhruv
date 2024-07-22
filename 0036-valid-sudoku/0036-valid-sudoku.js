/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //row wise
    for(let i=0; i<9; i++) {
        const set = new Set()
        for(let j=0; j<9; j++) {
            if(board[i][j] === ".") continue
            if(set.has(board[i][j])) return false
            set.add(board[i][j])
        }
    }
    //columns
    for(let i=0; i<9; i++) {
        const set = new Set()
        for(let j=0; j<9; j++) {
            if(board[j][i] === ".") continue
            if(set.has(board[j][i])) return false
            set.add(board[j][i])
        }
    }


    let m=0, n=0, grid = 0
    while(grid < 9) {
        const set = new Set()
        if(m === 9) {
            n += 3
            m = 0
        }
        for(let i=m; i<m+3; i++) {
            for(let j=n; j<n+3; j++) {
                if(board[i][j] === ".") continue
                if(set.has(board[i][j])) return false
                set.add(board[i][j])
            }
        }
        m+=3
        grid++
    }
    return true
};
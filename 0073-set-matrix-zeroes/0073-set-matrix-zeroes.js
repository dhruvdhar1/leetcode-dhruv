/**
   0    1   2   3
0  0    0   0   0
1  0    4   5   0
2  0    3   1   0

[r0, c0, c3]
 */
var setZeroes = function(matrix) {
    const set = new Set()
    const m = matrix.length, n = matrix[0].length
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(matrix[i][j] === 0) {
                set.add(`r${i}`)
                set.add(`c${j}`)
            }
        }
    }
    // console.log(set)
    for(let i=0; i<m; i++) {
        const key = `r${i}`
        if(set.has(key)) {
            for(let j=0; j<n; j++) {
                matrix[i][j] = 0
            }
        }
    }
    for(let j=0; j<n; j++) {
        const key = `c${j}`
        if(set.has(key)) {
            for(let i=0; i<m; i++) {
                matrix[i][j] = 0
            }
        }
    }

};
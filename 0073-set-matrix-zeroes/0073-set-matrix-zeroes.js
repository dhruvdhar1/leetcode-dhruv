/**
        0    1   2   3

0       0    0   0   0
1       0    4   5   0
2       0    3   1   0

fr = 0
fc = 0
[r0, c0, c3]
 */
var setZeroes = function(matrix) {
    let firstRow = 1
    let m = matrix.length, n = matrix[0].length

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = 0
                if(i === 0) {
                    firstRow=0
                } else {
                    matrix[i][0] = 0
                }

            }
        }
    }

    for(let i=1; i<m; i++) {
        if(matrix[i][0] === 0) {
            for(let j=0; j<n; j++) {
                matrix[i][j] = 0
            }
        }
    }
    for(let j=0; j<n; j++) {
        if(matrix[0][j] === 0) {
            for(let i=0; i<m; i++) {
                matrix[i][j] = 0
            }
        }
    }
    if(!firstRow) {
        for(let i=0; i<n; i++) {
            matrix[0][i] = 0
        }
    }
};
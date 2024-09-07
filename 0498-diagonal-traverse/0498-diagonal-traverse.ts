function findDiagonalOrder(mat: number[][]): number[] {
    let rows = mat.length
    let cols = mat[0].length
    let up = true
    let row_ind = 0, col_ind = 0
    let res = []

    while(res.length !== rows*cols) {
        if(up) {
            while(row_ind >= 0 && col_ind < cols) {
                // console.log(row_ind, " : ", col_ind, " : ", res)
                res.push(mat[row_ind][col_ind])
                row_ind -= 1
                col_ind += 1
            }

            if(col_ind >= cols) {
                row_ind += 2
                col_ind -= 1
            } else if(row_ind < 0) {
                row_ind += 1
            }
            up = false
        } else {
            while(row_ind < rows && col_ind >= 0) {
                // console.log("1111 ", row_ind, " : ", col_ind, " : ", res)
                res.push(mat[row_ind][col_ind]) //
                row_ind += 1
                col_ind -= 1
            }
            if(row_ind >= rows) {
                col_ind += 2
                row_ind -= 1
            } else if(col_ind < 0) {
                col_ind += 1
            }
            up = true
        }
    }
    return res
};
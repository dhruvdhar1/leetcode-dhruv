/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const res = []
    const m = mat.length
    const n = mat[0].length
    let r = 0, c = 0
    let going_up = true
    while(res.length < m*n) {
        if(going_up) {
            while(r >= 0 && c < n) {
                res.push(mat[r][c])
                r--
                c++
            }
            if(c >= n) {
                r += 2
                c -= 1
            } else if(r < 0) {
                r++
            }
            going_up = false
        } else {
            while(c >= 0 && r < m) {
                res.push(mat[r][c])
                r++
                c--
            }
            if(r >= m) {
                c += 2
                r -= 1
            } else if(c < 0) {
                c++
            }
            going_up = true
        }
    }
    return res
};
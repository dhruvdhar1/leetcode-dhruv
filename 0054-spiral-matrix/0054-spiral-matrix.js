/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    let top = 0, bottom = m-1
    let left = 0, right = n-1
    const res = []
    while(res.length < m*n) {
        if(top <= bottom) {
            for(let i=left; i<=right; i++) {
                res.push(matrix[top][i])
            }
            top++
        }
        
        if(right >= left) {
            for(let i=top; i<=bottom; i++) {
                res.push(matrix[i][right])
            }
            right--
        }
        if(bottom >= top) {
            for(let i=right; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
            bottom--
        }
        if(left <= right) {
            for(let i=bottom; i>=top; i--) {
                res.push(matrix[i][left])
            }
            left++
        }
    }
    return res
};
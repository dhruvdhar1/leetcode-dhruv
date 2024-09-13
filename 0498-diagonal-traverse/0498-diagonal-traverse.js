/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let up = true
    let m = mat.length, n = mat[0].length
    let i=0, j=0
    let res = []
    while(res.length !== m*n) {
        
        if(up) {
            while(i >= 0 && j < n) {
                res.push(mat[i][j]) 
                i-=1
                j+=1
            }

            if(j >= n) {
                i += 2
                j -= 1
            } else if (i < 0) {
                i += 1
            }
            up = false
        } else {
            while(i < m && j >= 0) {
                res.push(mat[i][j]) 
                i += 1 //2
                j -= 1 //-1

            }
            if(i >= m) {
                i -= 1 //2
                j += 2 //1
            }
            else if (j < 0) {
                j += 1
            }
            
            up = true
        }
    }
    console.log(res)
    return res

};
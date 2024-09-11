/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length
    let l=0, r=n-1 

    while(l < r) {
        const t=l, b = r
        for(let i=0; i<r-l; i++) {
            const temp = matrix[t][l+i]
            matrix[t][l+i] = matrix[b-i][l]
            matrix[b-i][l] = matrix[b][r-i]
            matrix[b][r-i] = matrix[t+i][r]
            matrix[t+i][r] = temp
        }
        l++
        r--
    }
};
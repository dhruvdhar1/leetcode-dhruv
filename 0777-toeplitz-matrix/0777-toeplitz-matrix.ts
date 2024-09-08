function isToeplitzMatrix(matrix: number[][]): boolean {
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            let m = i, n=j
            const val = matrix[m][n]
            if(m+1 < matrix.length && n+1 <matrix[0].length) {
                if(val !== matrix[m+1][n+1]) {
                    return false
                }
            }

        }
    }
    return true
};
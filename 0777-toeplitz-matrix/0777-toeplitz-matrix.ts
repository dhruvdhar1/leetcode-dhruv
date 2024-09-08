function isToeplitzMatrix(matrix: number[][]): boolean {
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            const val = matrix[i][j]
            if(i+1 < matrix.length && j+1 <matrix[0].length) {
                if(val !== matrix[i+1][j+1]) {
                    return false
                }
            }

        }
    }
    return true
};
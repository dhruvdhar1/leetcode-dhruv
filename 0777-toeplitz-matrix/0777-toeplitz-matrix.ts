function isToeplitzMatrix(matrix: number[][]): boolean {
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            let m = i, n=j
            const val = matrix[m][n]
            while(m < matrix.length && n<matrix[0].length) {
                if(val !== matrix[m][n]) {
                    return false
                }
                m++
                n++
            }

        }
    }
    return true
};
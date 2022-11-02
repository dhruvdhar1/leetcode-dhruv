class NumMatrix {

    int[][] sum;
    public NumMatrix(int[][] matrix) {
        int r = matrix.length;
        int c = matrix[0].length;
        sum = new int[r+1][c+1];
        
        for(int i=0; i<r; i++) {
            int prefix = 0;
            for(int j=0; j<c; j++) {
                prefix += matrix[i][j];
                int above = sum[i][j+1];
                sum[i+1][j+1] = prefix + above;
            }
            // System.out.println(Arrays.toString(sum[i]));
        }
    }
    
    public int sumRegion(int row1, int col1, int row2, int col2) {
        int r = row2+1;
        int c = col2+1;
        
        return (sum[r][c] - sum[row1][c] - sum[r][col1] + sum[row1][col1]);
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */
class Solution {
        
    private boolean isValid(int[][] grid, int x, int y) {
        //check row
        for(int i=0; i<grid.length; i++) {
            if(grid[x][i] == 1) return false;
        }
        
        //check column
        for(int i=0; i<grid.length; i++) {
            if(grid[i][y] == 1) return false;
        }
        
        //check left diagnol \
        for(int i=0; i<grid.length; i++) {
            if(x+i < grid.length && y+i<grid.length) {
                if(grid[x+i][y+i] == 1) return false;
            }
        }
        for(int i=0; i<grid.length; i++) {
            if(x-i >= 0 && y-i>= 0) {
                if(grid[x-i][y-i] == 1) return false;
            }
        }
        
        //check right diagnol /
        for(int i=0; i<grid.length; i++) {
            if(x+i < grid.length && y-i>=0) {
                if(grid[x+i][y-i] == 1) return false;
            }
        }
        for(int i=0; i<grid.length; i++) {
            if(x-i >=0 && y+i < grid.length) {
                if(grid[x-i][y+i] == 1) return false;
            }
        }
        return true;
    }
    
    
    private int backtrack(int[][] grid, int x, int y, int qCount, int n) {
        if(qCount == n) {
            return 1;
        }
        
        if(x >= n) {
            return 0;
        }
        
        int newX = -1;
        int newY = -1;
        
        if(y == n-1) {
            newX = x+1;
            newY = 0;
        } else {
            newX = x;
            newY = y+1;
        }
        
        int res = 0;
        if(isValid(grid, x, y)) {
            grid[x][y] = 1;
            res += backtrack(grid, newX, newY, qCount+1, n);
            grid[x][y] = 0;
        }
        res += backtrack(grid, newX, newY, qCount, n);
        return res;
    }
    public int totalNQueens(int n) {
        int[][] grid = new int[n][n];
        return backtrack(grid, 0, 0, 0, n);
    }
}
class Solution {
    
    private boolean isValid(char[][] board, int x, int y, int num) {
        for(int i=0; i<9; i++) {
            if(board[x][i] == (char)(num + '0')) return false;
        }
        
        for(int i=0; i<9; i++) {
            if(board[i][y] == (char)(char)(num + '0')) return false;
        }
        
        int xOffset = (x/3) * 3;
        int yOffset = (y/3) * 3;
        
        for(int i=xOffset; i<xOffset+3; i++) {
            for(int j=yOffset; j<yOffset+3; j++) {
                if(board[i][j] == (char)(char)(num + '0')) return false;
            }
        }
        
        return true;
    }
    
    private boolean backtrack(char[][] board, int x, int y) {
        int m=-1, n=-1;
        if(y == 8) {
            m = x+1;
            n = 0;
        } else {
            m = x;
            n = y+1;
        }
        if(x == 9) {
            return true;
        }
        if(board[x][y] != '.') {
            return backtrack(board, m, n);
        } else {
            for(int k=1; k<=9; k++) {
                if(isValid(board, x, y, k)) {
                    board[x][y] = (char)(k +'0');
                    if(backtrack(board, m, n)) return true;
                    board[x][y] = '.';
                }
            }
        }
        return false;
    }
    
    public void solveSudoku(char[][] board) {
        backtrack(board, 0, 0);
    }
}
class Solution {
    
    private boolean isValid(int x, int y, int pos, int[][] board) {
        for(int i=0; i<9; i++) {
            if(board[i][y] == pos) return false;
        }
        for(int j=0; j<9; j++) {
            if(board[x][j] == pos) return false;
        }
        int xOffset = 3*(x/3);
        int yOffset = 3*(y/3);
        
        for(int i=xOffset; i<xOffset+3; i++) {
            for(int j=yOffset; j<yOffset+3; j++) {
                if(board[i][j] == pos) return false;
            }
        }
        // System.out.println("+++++++ : " + x + " : " + y + " : " + pos);
        return true;
    }
    
    private boolean backtrack(int[][] board, int x, int y) {
        if(x == board.length) {
            return true;
        }
        int ni = 0;
        int nj = 0;
        
        if(y == board[0].length-1) {
            ni = x+1;
            nj = 0;
        } else {
            ni = x;
            nj = y+1;
        }
        
        // System.out.println(x + " : " + y);
        
        if(board[x][y] != 0) {
            return backtrack(board, ni, nj);
        } else {
            for(int i=1; i<=9; i++) {
                if(isValid(x, y, i, board)) {
                    // System.out.println("-----" + x + " : " + y + " : " + i);
                    board[x][y] = i;
                    if(backtrack(board, ni, nj)) return true;
                    board[x][y] = 0;
                }
            }
        }
        return false;
    }
    
    public void solveSudoku(char[][] board) {
        int[][] grid = new int[9][9];
        
        for(int i=0; i<9; i++) {
            for(int j=0; j<9; j++) {
                String ch = "" + board[i][j];
                if(ch.equals(".")) {
                    grid[i][j] = 0;
                } else {
                    grid[i][j] = Integer.parseInt(ch);
                }
            }
        }
        backtrack(grid, 0, 0);
        // for(int i=0; i<9; i++) {
        //     System.out.println(Arrays.toString(grid[i]));
        // };
        for(int i=0; i<9; i++) {
            for(int j=0; j<9; j++) {
                char ch = (char)(grid[i][j] + '0');
                // System.out.println("/////// " + ch);
                board[i][j] = ch;
            }
        }
    }
}
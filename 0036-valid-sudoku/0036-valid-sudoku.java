class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<Character>> rowMap = new HashMap();
        Map<Integer, Set<Character>> colMap = new HashMap();
        
        for(int i=0; i<board.length; i++) {
            for(int j=0; j<board[0].length; j++) {
                if(board[i][j] != '.') {
                    Set<Character> rowSet = rowMap.getOrDefault(i, new HashSet<Character>());
                    if(rowSet.contains(board[i][j])) {
                        return false;
                    }
                    rowSet.add(board[i][j]);
                    rowMap.put(i, rowSet);
                }
            }
        }
        
        for(int i=0; i<board.length; i++) {
            for(int j=0; j<board[0].length; j++) {
                if(board[j][i] != '.') {
                    Set<Character> colSet = colMap.getOrDefault(i, new HashSet<Character>());
                    if(colSet.contains(board[j][i])) {
                        return false;
                    }
                    colSet.add(board[j][i]);
                    colMap.put(i, colSet);
                }
            }
        }
        
        //check in sub-grid;
        int xOffset = 0;
        int yOffset = 0;
        for(int k=1; k<=9; k++) {
            Set<Character> subGrid = new HashSet();
            for(int i=xOffset; i<xOffset+3; i++) {
                for(int j=yOffset; j<yOffset+3; j++) {
                    if(board[i][j] != '.') {
                        if(subGrid.contains(board[i][j])) {
                            return false;
                        }
                        subGrid.add(board[i][j]);
                    }
                }
            }
            if(yOffset+3 >= 8) {
                xOffset += 3;
                yOffset = 0;
            } else {
                yOffset += 3;
            }
        }
        
        return true;
    }
}
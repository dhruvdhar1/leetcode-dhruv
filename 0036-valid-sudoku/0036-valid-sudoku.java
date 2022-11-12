class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<Character>> rowMap = new HashMap();
        Map<Integer, Set<Character>> colMap = new HashMap();
        
        for(int i=0; i<board.length; i++) {
            for(int j=0; j<board[0].length; j++) {
                if(board[i][j] != '.') {
                    Set<Character> rowSet = rowMap.getOrDefault(i, new HashSet<Character>());
                    if(rowSet.contains(board[i][j])) {
                        // System.out.println("-----");
                        return false;
                    }
                    rowSet.add(board[i][j]);
                    rowMap.put(i, rowSet);
                    // System.out.println("-----: " + i + " : " + rowSet.toString());
                }
            }
        }
        
        for(int i=0; i<board.length; i++) {
            for(int j=0; j<board[0].length; j++) {
                if(board[j][i] != '.') {
                    Set<Character> colSet = colMap.getOrDefault(i, new HashSet<Character>());
                    if(colSet.contains(board[j][i])) {
                        // System.out.println("-----11: ");
                        return false;
                    }
                    colSet.add(board[j][i]);
                    colMap.put(i, colSet);
                    // System.out.println("-----11: " + i + " : " + colSet.toString());
                }
            }
        }
        
        //check in sub-grid;
        int xOffset = 0;
        int yOffset = 0;
        for(int k=1; k<=9; k++) {
            // System.out.println("xxxxx: " + xOffset);
            // System.out.println("yyyyy: " + yOffset);
            Set<Character> subGrid = new HashSet();
            for(int i=xOffset; i<xOffset+3; i++) {
                for(int j=yOffset; j<yOffset+3; j++) {
                    if(board[i][j] != '.') {
                        if(subGrid.contains(board[i][j])) {
                            // System.out.println("-----22: " + subGrid.toString() + " : " + i + " : " + j);
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
                // xOffset = 0;
                yOffset += 3;
            }
        }
        
        return true;
    }
}
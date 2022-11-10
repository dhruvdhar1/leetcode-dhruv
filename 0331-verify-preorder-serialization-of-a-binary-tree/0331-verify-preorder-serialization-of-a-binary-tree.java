class Solution {
    public boolean isValidSerialization(String preorder) {
        String[] val = preorder.split(",");
        int len = val.length;
        int node = 0;
        int l = -1;
        int r = 0;
        if(r >= len) return false;
        
        while(node < len) {
            if(node > r) return false;
            if(val[node].equals("#")) {
                node++;
                continue;
            }
            l = r+1;
            r = r+2;
            
            if(l >= len || r >= len) {
                return false;
            }
            node++;
        }
        return true;
    }
}
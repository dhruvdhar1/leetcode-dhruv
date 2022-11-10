class Solution {
    public boolean isValidSerialization(String preorder) {
        String[] val = preorder.split(",");
        System.out.println("++++ " + Arrays.toString(val));
        int len = val.length;
        int node = 0;
        int l = -1;
        int r = 0;
        
        //check that ind 0 is not #
        if(r >= len) return false;
        
        while(node < len) {
            if(node > r) return false;
            if(val[node].equals("#")) {
                node++;
                continue;
            }
            // if(node != 0) {
            l = r+1;
            r = r+2;
            // }
            
            if(l >= len || r >= len) {
                // System.out.println("---- " + node + " : " + l + " : " + r);
                return false;
            }
            node++;
        }
        return true;
    }
}
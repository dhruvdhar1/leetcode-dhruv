/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private boolean getPath(TreeNode root, int target, StringBuilder path) {
        if(root == null) return false;
        if(root.val == target) return true;
        
        if(getPath(root.left, target, path)) {
            path.append("L");
            return true;
        } else if(getPath(root.right, target, path)) {
            path.append("R");
            return true;
        }
        return false;
    }
    
    private TreeNode findLca(TreeNode root, int start, int end) {
        if(root == null) return null;
        if(root.val == start || root.val == end) return root;
        
        TreeNode left = findLca(root.left, start, end);
        TreeNode right = findLca(root.right, start, end);
        
        if(left!= null && right != null) return root;
        if(right != null) return right;
        if(left != null) return left;
        return null;
    }
    
    private StringBuilder getPathFromStart(String path) {
        StringBuilder res = new StringBuilder();
        for(int i=0; i<path.length(); i++) {
            res.append("U");
        }
        return res;
    }
    
    public String getDirections(TreeNode root, int startValue, int destValue) {
        
        // StringBuilder res = new StringBuilder();
        StringBuilder leftPath = new StringBuilder();
        StringBuilder rightPath = new StringBuilder();
        
        TreeNode lca = findLca(root, startValue, destValue);
        // check if start is in left ST
        boolean isStartPresent = getPath(lca.left, startValue, new StringBuilder());
        if(lca.val == startValue){
            boolean destInLeft = getPath(lca.left, destValue, leftPath);
            boolean destInRight = getPath(lca.right, destValue, rightPath);
            if(destInLeft) {
                return new StringBuilder("L").append(leftPath.reverse().toString()).toString();
            } else {
                return new StringBuilder("R").append(rightPath.reverse().toString()).toString();
            }
        } else if(lca.val == destValue){
            boolean startInLeft = getPath(lca.left, startValue, leftPath);
            boolean startInRight = getPath(lca.right, startValue, rightPath);
            if(startInLeft) {
                return getPathFromStart(leftPath.toString()).append("U").toString();
            } else {
                return getPathFromStart(rightPath.toString()).append("U").toString();
            }
        } else if(isStartPresent) {
            getPath(lca.left, startValue, leftPath);
            getPath(lca.right, destValue, rightPath);
            leftPath.append("U");
            return getPathFromStart(leftPath.toString()).append("R").append(rightPath.reverse().toString()).toString();
        } else {
            getPath(lca.left, destValue, leftPath);
            getPath(lca.right, startValue, rightPath);
            if(lca.val != startValue) {
                rightPath.append("U");
            }
            return getPathFromStart(rightPath.toString()).append("L").append(leftPath.reverse().toString()).toString();
        }
    }
}
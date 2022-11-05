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
    
    private int dfs(TreeNode root, int level,
                     Map<Integer, List<Integer>> levelOrder) {
        if(null == root) return level;
        // if(null == levelOrder.get(level)) {
        //     List<Integer> list = new ArrayList();
        // }
        List<Integer> levelElements = 
                levelOrder.getOrDefault(level, new ArrayList<Integer>());
        levelElements.add(root.val);
        levelOrder.put(level, levelElements);
        int ll = dfs(root.left, level+1, levelOrder);
        int rl = dfs(root.right, level+1, levelOrder);
        return Math.max(ll, rl);
    }
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        Map<Integer, List<Integer>> levelOrder = new HashMap();
        List<List<Integer>> res = new ArrayList();
        int maxL = dfs(root, 1, levelOrder);
        // System.out.println("llll: " + levelOrder.toString());
        
        for(int i=1; i<maxL; i++) {
            List<Integer> level = levelOrder.get(i);
            if(i%2 == 0) {
                // System.out.println("List: " + level.toString());
                Collections.reverse(level);
            }
            res.add(level);
        }
        return res;
    }
}
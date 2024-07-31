/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const map = new Map()

    function dfs(node, height) {
        if(null === node) return 
        map.set(height, node.val)
        dfs(node.left, height+1)
        dfs(node.right, height+1)
    }

    dfs(root, 0)
    return Array.from(map.values())
};
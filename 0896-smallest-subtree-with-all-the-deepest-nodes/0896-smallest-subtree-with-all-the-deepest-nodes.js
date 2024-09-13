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
 * @return {TreeNode}
 */
function dfs(root) {
    if(null == root) {
        return [0,null]
    }
    const left = dfs(root.left)
    const right = dfs(root.right)
    if(left[0] > right[0]) {
        return [1+left[0], left[1]]
    } else if(left[0] < right[0]) {
        return [1+right[0], right[1]]
    } else {
        return [1+left[0], root]
    }
}


var subtreeWithAllDeepest = function(root) {
    const node = dfs(root)
    return node[1]
};
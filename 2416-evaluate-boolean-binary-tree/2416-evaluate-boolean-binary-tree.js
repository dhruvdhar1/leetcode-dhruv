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
 * @return {boolean}
 */
function dfs(root) {
    if(root.left === null && root.right === null) {
        return root.val
    }
    const l = evaluateTree(root.left)
    const r = evaluateTree(root.right)
    if(root.val === 2) {
        root.val = l + r
    } else if(root.val === 3) {
        root.val = l * r
    }
    return root.val
}
var evaluateTree = function(root) {
    const node = dfs(root)
    // console.log("ooo: ", node)
    return node
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function dfs(root, arr) {
    if(root === null) return
    if(root.left === null && root.right === null) {
        arr.push(root.val)
        return
    }
    dfs(root.left, arr)
    dfs(root.right, arr)
}
var leafSimilar = function(root1, root2) {
    const arr1 = [], arr2 = []
    dfs(root1, arr1)
    dfs(root2, arr2)
    if(arr1.length !== arr2.length) return false
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false
    }
    return true
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0) return null

    const root = new TreeNode(preorder[0])
    const rootind = inorder.findIndex(val => val === preorder[0])
    const leftpreorder = preorder.slice(1, rootind+1)
    const leftinorder = inorder.slice(0, rootind+1)

    root.left = buildTree(leftpreorder, leftinorder)

    const rightpreorder = preorder.slice(rootind+1)
    const rightinorder = inorder.slice(rootind+1)
    root.right = buildTree(rightpreorder, rightinorder)
    return root
};
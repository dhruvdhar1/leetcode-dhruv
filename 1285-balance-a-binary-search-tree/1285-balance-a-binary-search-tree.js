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
const inorder = (root, sorted) => {
    if(root === null) return
    inorder(root.left, sorted)
    sorted.push(root.val)
    inorder(root.right, sorted)
}

const constructTree = (arr) => {
    if(arr.length === 0) return null
    const mid = Number.parseInt(arr.length/2)
    const root = new TreeNode(arr[mid], null, null)
    const leftNodes = arr.slice(0,mid)
    const rightNodes = arr.slice(mid+1)

    root.left = constructTree(leftNodes)
    root.right = constructTree(rightNodes)

    return root
    
}
var balanceBST = function(root) {
    const sorted = []
    inorder(root, sorted)
    const newRoot = constructTree(sorted)
    return newRoot
};
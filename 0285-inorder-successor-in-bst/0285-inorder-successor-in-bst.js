/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    const inorder = []
    function dfs(node) {
        if(node == null) return
        dfs(node.left)
        inorder.push(node)
        dfs(node.right)
    }
    dfs(root)
    let ind = -1
    for(let i=0; i<inorder.length; i++) {
        if(inorder[i].val === p.val) {
            ind = i
            break
        }
    }
    // console.log(inorder[ind+1], ind)
    // console.log((ind < 0 || ind >= inorder.length-1) ? null : inorder[ind+1])
    return (ind < 0 || ind >= inorder.length-1) ? null : inorder[ind+1]
};
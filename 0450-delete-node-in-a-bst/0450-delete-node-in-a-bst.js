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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(null === root) return null

    if(key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if(key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        //key === root.val
        const lt = root.left
        const rt = root.right
        if(null === rt) return lt
        else if(null === lt) return rt
        else {
            let temp = rt
            while(temp.left !== null) {
                temp = temp.left
                // console.log("tt: ", temp.val, " : temp parent: ", tempParent.val)
            }
            root.val = temp.val
            root.right = deleteNode(root.right, temp.val)
        }
    }
    return root
};
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

function validate(root, minVal, maxVal) {
    if(null === root) return true
    if(root.val <= minVal || root.val >= maxVal) return false

    return validate(root.left, minVal, root.val) && validate(root.right, root.val, maxVal)
}

var isValidBST = function(root) {
    return validate(root, Number.MIN_INTEGER_VALUE, Number.MAX_INTEGER_VALUE)
};
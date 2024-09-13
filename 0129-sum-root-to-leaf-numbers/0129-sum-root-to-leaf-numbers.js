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
 * @return {number}
 */
function dfs(root, path, nums) {
    if(null === root) return
    if(root.right === null && root.left === null) {
        // const num = parseInt(`${path}${root.val}`)

        nums.push(path*10+root.val)
        return
    }
    
    dfs(root.left, (path*10+root.val), nums)
    dfs(root.right, (path*10+root.val), nums)

}
var sumNumbers = function(root) {
    const nums = []
    dfs(root, 0, nums)
    // console.log(nums)
    const sum = nums.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    return sum
};
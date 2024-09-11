/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    inorder = null
    p = null
    constructor(root: TreeNode | null) {
        this.inorder = []
        this.p = 0
        this.dfs(root)
    }

    dfs(root) {
        if(root == null) {
            return
        }
        this.dfs(root.left)
        this.inorder.push(root)
        this.dfs(root.right)
    }

    next(): number {
        if(this.hasNext()) {
            const node = this.inorder[this.p++]
            return node.val
        }
        return -1
    }

    hasNext(): boolean {
        if(this.p < this.inorder.length) return true
        return false
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
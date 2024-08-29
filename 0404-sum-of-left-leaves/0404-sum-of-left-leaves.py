# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isLeafNode(self, root):
        if root != None and root.left == None and root.right == None:
            return True
        return False

    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if root == None:
            return 0
        
        res, l, r = 0, 0, 0
        if self.isLeafNode(root.left):
            res += root.left.val
        else:
            l = self.sumOfLeftLeaves(root.left)
        r = self.sumOfLeftLeaves(root.right)

        return res + l + r
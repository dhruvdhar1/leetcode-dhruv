# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    diameter = 0

    def dfs(self, root: Optional[TreeNode]) -> int:
        if root == None:
            return 0
        
        lHeight = self.dfs(root.left)
        rHeight = self.dfs(root.right)
        self.diameter = max(self.diameter, lHeight+rHeight)
        return 1 + max(lHeight, rHeight)

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.dfs(root)
        return self.diameter
        
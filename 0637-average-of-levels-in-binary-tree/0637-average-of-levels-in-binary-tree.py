# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        q = deque()
        q.append(root)
        res = []
        while q:
            qlen = len(q)
            children = []
            sum = 0
            while q:
                pop = q.popleft()
                # print("pop: ", pop)
                sum += pop.val
                if(pop.left):
                    children.append(pop.left)
                if(pop.right):
                    children.append(pop.right)
            
            avg = sum/qlen
            res.append(avg)
            for child in children:
                q.append(child)
        return res
                
        
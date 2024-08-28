class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        numZero = 0
        numOnes = 0
        res = 0
        map = dict()
        for i in range(len(nums)):
            if nums[i] == 0:
                numZero += 1
            else:
                numOnes += 1

            diff = numOnes - numZero
            if diff not in map:
                map[diff] = i
            
            if numZero == numOnes:
                res = numZero + numOnes
            else:
                res = max(res, i-map[diff])
        return res
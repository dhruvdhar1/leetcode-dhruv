class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        if len(nums) < 2:
            return False
        map = {}
        sum = 0
        for i in range(len(nums)):
            sum += nums[i]
            if i >= 1 and sum%k == 0:
                return True
            if sum%k not in map:
                map[sum%k] = i
            else:
                idx = map[sum%k]
                if i-idx >= 2:
                    return True

        return False
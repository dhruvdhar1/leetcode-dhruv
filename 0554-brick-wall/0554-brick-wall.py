class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        map = {}
        for row in wall:
            sum = 0
            for brick in row[:-1]:
                sum += brick
                map[sum] = 1 + map.get(sum, 0)
        
        if len(map) > 0:
            return len(wall) - max(map.values())
        return len(wall)
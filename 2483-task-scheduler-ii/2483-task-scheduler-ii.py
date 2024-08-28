class Solution:
    def taskSchedulerII(self, tasks: List[int], space: int) -> int:
        # q = deque()
        map = {}
        time = 0
        p = 0
        while p < len(tasks):
            task = tasks[p]
            if task in map:
                time = max(time+1, map[task] + space + 1)
                prev_execution_time = map[task]
                map[task] = time
            else:
                time += 1
                map[task] = time
            p += 1
        
        return time

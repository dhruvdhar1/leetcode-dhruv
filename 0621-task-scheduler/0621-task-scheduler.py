class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        time = 0
        q = deque()
        map = Counter(tasks)
        maxHeap = [-val for val in map.values()]
        heapq.heapify(maxHeap)

        while len(q) > 0 or len(maxHeap) > 0:
            time += 1
            if len(maxHeap):
                pop = 1 + heapq.heappop(maxHeap)
                if pop < 0:
                    q.append([pop, time+n])
            
            if len(q) and q[0][1] <= time:
                pop = q.popleft()
                heapq.heappush(maxHeap, pop[0])
        
        return time
        
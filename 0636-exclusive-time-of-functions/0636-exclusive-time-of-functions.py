class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        call_stack = []
        res = [0] * n
        prev_start_time = 0

        for log in logs:
            func_id, op, timestamp = log.split(":")
            func_id = int(func_id)
            timestamp = int(timestamp)
            if op == "start":
                if call_stack:
                    poll = call_stack[-1]
                    res[poll] += timestamp - prev_start_time

                call_stack.append(func_id)
                prev_start_time = timestamp
            else:
                pop = call_stack.pop()
                res[pop] += timestamp - prev_start_time + 1
                prev_start_time = timestamp + 1
        return res
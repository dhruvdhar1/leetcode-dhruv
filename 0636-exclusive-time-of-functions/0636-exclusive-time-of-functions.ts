function exclusiveTime(n: number, logs: string[]): number[] {
    let prev_time = 0
    const stack = []
    const res = new Array(n).fill(0)
    for(const log of logs) {
        const tokens = log.split(":")
        const id = parseInt(tokens[0])
        const type = tokens[1]
        const ts = parseInt(tokens[2])

        if(type === "start") {
            prev_time++
            if(stack.length === 0) {
                stack.push(id)
            } else {
                const diff = ts - prev_time
                const last_process = stack[stack.length-1]
                res[last_process] += diff
                stack.push(id)
            }
            prev_time = ts
        } else {
            stack.pop()
            const runtime = ts - prev_time + 1
            res[id] += runtime
            prev_time = ts
        }

    }
    return res

};
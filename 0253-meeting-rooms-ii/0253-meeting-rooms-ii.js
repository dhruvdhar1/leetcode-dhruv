/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const pq = new MinPriorityQueue({priority: interval => interval[1]})
    intervals.sort((a, b) => a[0] - b[0])
    let max = -1
    for(const interval of intervals) {
        const front = pq.front()
        if(front == null || interval[0] < front.element[1]) {
            pq.enqueue(interval)
            max = Math.max(max, pq.size())
        } else {
            pq.dequeue()
            pq.enqueue(interval)
        }
    }
    return pq.size()
};
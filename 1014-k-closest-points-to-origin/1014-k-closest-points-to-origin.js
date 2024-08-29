/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const pq = new MaxPriorityQueue({
        compare: (a,b) => b[1] - a[1]
    }) //todo: custom comparator

    for(const point of points) {
        const dist = Math.pow(point[0],2) + Math.pow(point[1],2)
        pq.enqueue([point, dist])
        
        if(pq.size() > k) {
            pq.dequeue()
        }
    }
    const res = pq.toArray().map(el => {
        return el[0]
    })
    return res;
};
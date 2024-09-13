/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder = function(numCourses, prerequisites) {
    const res = []
    const adj = new Map()
    const indegree = new Array(numCourses).fill(0)
    for(const prereq of prerequisites) {
        const c1 = prereq[0]
        const c2 = prereq[1]

        if(!adj.has(c1)) {
            adj.set(c1, [])
        }
        if(!adj.has(c2)) {
            adj.set(c2, [])
        }
        adj.get(c2).push(c1)
        indegree[c1]++
    }
    const q = new Queue()
    for(let i=0; i<indegree.length; i++) {
        if(indegree[i] === 0) {
            q.enqueue(i)
        }
    }
    while(q.size() > 0) {
        const pop = q.dequeue()
        res.push(pop)
        const neigh = adj.get(pop) || []
        for(const n of neigh) {
            indegree[n]--
            if(indegree[n] === 0) {
                q.enqueue(n)
            }
        }
    }
    // res.reverse()
    return res.length === numCourses ? res : []
};
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if(prerequisites.length === 0) return true
    function checkCycle(node, visited, map) {
        if(visited.has(node)) return true
        visited.add(node)
        const neighbors = map.get(node)
        let cycle = false
        for(const n of neighbors) {
            cycle = cycle || checkCycle(n, visited, map)
            if(cycle) return true
        }
        visited.delete(node)
        map.set(node, [])
        return cycle
    }

    const map = new Map()
    const visited = new Set()
    for(const prereq of prerequisites) {
        const to = prereq[1]
        const from = prereq[0]
        if(!map.has(from)) {
            map.set(from, [])
        }
        if(!map.has(to)) {
            map.set(to, [])
        }
        const arr = map.get(from)
        arr.push(to)
        map.set(from, arr)
    }
    // console.log(map)
    for(const [key, val] of map) {
        const cycle = checkCycle(key, visited, map)
        if(cycle) return false
    }
    return true
};
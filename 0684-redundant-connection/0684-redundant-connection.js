/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = []
    for(let i=0; i<edges.length; i++) {
        parent[i] = i
    }
    const union = (el1, el2) => {
        const p1 = find(el1)
        const p2 = find(el2)
        if(p1 !== p2) {
            parent[p2] = p1
        }
    }
    const find = (el) => {
        if(el !== parent[el]) return find(parent[el])
        return el
    }

    for(const edge of edges) {
        const el1 = edge[0]
        const el2 = edge[1]
        const p1 = find(el1)
        const p2 = find(el2)

        if(p1 === p2) return edge
        union(el1, el2)
    }
    return null
};
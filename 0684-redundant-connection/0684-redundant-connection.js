/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = edges.map((_, i) => i);
    const union = (n1, n2) => {
        const p1 = find(n1)
        const p2 = find(n2)
        if(p1 !== p2) {
            parent[parent[p1]] = parent[p2]
        }
    }
    const find = (n1) => {
        if(parent[n1] !== n1) {
            return find(parent[parent[n1]])
        }
        return n1
    }
    
    let redundantEdge = null
    for(const edge of edges) {
        const p1 = find(edge[0])
        const p2 = find(edge[1])

        if(p1 === p2) {
            redundantEdge = edge
        } else {
            union(edge[0], edge[1])
        }
    }
    return redundantEdge;
};
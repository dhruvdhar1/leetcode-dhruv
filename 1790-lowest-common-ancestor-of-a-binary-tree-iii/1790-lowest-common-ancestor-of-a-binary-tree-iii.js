/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */

const getPath = (node, path) => {
    if(node === null) {
        return;
    }
    path.push(node)
    getPath(node.parent, path);
}
var lowestCommonAncestor = function(p, q) {
    const path1 = []
    const path2 = []
    getPath(p, path1)
    getPath(q, path2)

    // console.log("p1: ", path1)
    // console.log("p2: ", path2)
    
    let i = path1.length-1, j = path2.length-1
    let res = null
    while(i >= 0 && j >= 0) {
        if(path1[i] === path2[j]) {
            res = path1[i]
        }
        i--
        j--
    }
    return res
};
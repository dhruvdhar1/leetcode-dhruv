/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function backtrack(candidates, target, ind, arr, res) {
    if(target === 0) {
        res.push([...arr])
        return
    }
    if(target < 0) {
        return
    }

    for(let i=ind; i<candidates.length; i++) {
        if(i > ind && candidates[i] === candidates[i-1]) continue
        if(candidates[i] > target) break
        arr.push(candidates[i])
        backtrack(candidates, target-candidates[i], i+1, arr, res)
        arr.pop()
    }
}

var combinationSum2 = function(candidates, target) {
    const res = []
    candidates.sort((a,b) => a-b)
    backtrack(candidates, target, 0, [], res)
    return res
};
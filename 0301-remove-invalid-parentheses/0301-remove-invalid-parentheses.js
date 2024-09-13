/**
 * @param {string} s
 * @return {string[]}
 */
function backtrack(s, curr, ind, open, close, res) {
    if(ind >= s.length) {
        //todo: handle empty curr
        if(curr === "" && res.size > 0) return
        if(open === close) {
            res.add(curr)
        }
        return
    }

    if(close > open) {
        return
    }
    const ch = s.charAt(ind)
    // console.log("ch: ", ind, " : ", ch)
    if(ch === '(') {
        backtrack(s, `${curr}(`, ind+1, open+1, close, res) || backtrack(s, `${curr}`, ind+1, open, close, res)
    } else if(ch === ')') {
        backtrack(s, `${curr})`, ind+1, open, close+1, res) || backtrack(s, `${curr}`, ind+1, open, close, res)
    } else {
        backtrack(s, `${curr}${ch}`, ind+1, open, close, res)
    }
}
var removeInvalidParentheses = function(s) {
    const set = new Set()
    backtrack(s, '', 0, 0, 0, set)
    const arr = [...set.values()]
    arr.sort((a, b) => b.length - a.length)
    const res = []
    const maxlen = arr[0].length
    for(const str of arr) {
        if(str.length === maxlen){
            res.push(str)
        }
    }
    // console.log(arr)
    return res
};
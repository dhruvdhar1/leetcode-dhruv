/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stk = []
    const arr = s.split('')
    // console.log(arr)
    for(let i=0; i<arr.length; i++) {
        const ch = arr[i]
        if(ch === '(') {
            stk.push(i)
        } else if(ch === ')') {
            if(stk.length > 0) {
                stk.pop()
            } else {
                arr[i] = ''
            }
        }
    }
    while(stk.length > 0) {
        const pop = stk.pop()
        arr[pop] = ''
    }
    return arr.join("")
};

/**
    TC: O(len(s))
    SC: O(len(s))
*/
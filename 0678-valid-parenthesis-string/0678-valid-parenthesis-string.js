/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const stk1 = []
    const stk2 = []
    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') {
            stk1.push(i)
        } else if(s[i] === ')') {
            if(stk1.length > 0) {
                stk1.pop()
            } else if(stk2.length > 0) {
                stk2.pop()
            } else {
                return false
            }
        } else {
            stk2.push(i)
        }
    }
    
    while(stk1.length > 0 && stk2.length > 0) {
        const openPoll = stk1[stk1.length-1]
        const wildcardPoll = stk2[stk2.length-1]
        if(wildcardPoll < openPoll) return false
        stk1.pop()
        stk2.pop()
    }
    return stk2.length >= stk1.length
};
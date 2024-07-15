/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const open = []
    const wild = []
    for(let i=0; i<s.length; i++) {
        const ch = s[i]
        if(ch === '(') {
            open.push(i)
        } else if(ch === ')') {
            if(open.length > 0) {
                open.pop()
            } else if(wild.length > 0) {
                wild.pop()
            } else {
                return false
            }
        } else {
            wild.push(i)
        }
    }

    // console.log("-----open: ", open, " : wild: ", wild)
    if(open.length === 0) return true
    while(open.length > 0) {
        if(wild.length === 0) return false
        const openPoll = open[open.length-1]
        const wildPoll = wild[wild.length-1]
        if(wildPoll < openPoll) return false
        open.pop()
        wild.pop()
    }
    // console.log("open: ", open, " : wild: ", wild)
    return true
};
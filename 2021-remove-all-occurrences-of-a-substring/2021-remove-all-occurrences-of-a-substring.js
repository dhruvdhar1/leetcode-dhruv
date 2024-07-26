/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    const stack = []
    for(const ch of s) {
        stack.push(ch)
        if(stack.length >= part.length) {
            const substr = stack.join("").slice(stack.length-part.length, stack.length)
            // console.log("ch: ", ch, " substr: ", substr, "arr: ", stack)
            if(substr === part) {
                let i = substr.length
                while(i > 0) {
                    stack.pop()
                    i--
                }
            }
        }
    }
    return stack.join("")
};
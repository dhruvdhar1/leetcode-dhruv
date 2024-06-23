/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const commonPrefix = (word1, word2) => {
        let common = ""
        for(let i=0; i<word1.length; i++) {
            const ch1 = word1[i]
            const ch2 = word2[i]
            if(!ch2) break
            if(ch1 === ch2) {
                common += ch1
            } else {
                break
            }
        }
        // console.log("common--> ", common)
        return common
    }
    let common = strs[0]
    for(let i=1; i<strs.length; i++) {
        common = commonPrefix(common, strs[i])
    }
    return common
};
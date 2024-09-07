function longestPalindrome(s: string): string {

    const getPalindromeLength = (l, r) => {
        let res = ""
        while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            res = s.slice(l, r+1)
            l--
            r++
        }
        return res
    }

    let res = ""
    for(let i=0; i<s.length; i++) {
        const str1 = getPalindromeLength(i,i)
        const str2 = getPalindromeLength(i,i+1)
        // console.log("i: ", i, " str1: ", str1, " str2: ", str2)
        if(str1.length > str2.length) {
            if(str1.length > res.length) {
                res = str1
            }
        } else {
            if(str2.length > res.length) {
                res = str2
            }
        }
    }
    return res
};
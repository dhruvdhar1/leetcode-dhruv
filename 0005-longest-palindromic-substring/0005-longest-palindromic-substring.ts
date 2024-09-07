function longestPalindrome(s: string): string {

    const getPalindromeLength = (l, r) => {
        while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            l--
            r++
        }
        return s.slice(l+1,r)
    }

    let res = ""
    for(let i=0; i<s.length; i++) { //O(n)
        const str1 = getPalindromeLength(i,i)
        const str2 = getPalindromeLength(i,i+1)
        // console.log("i: ", i, " str1: ", str1, " str2: ", str2)
        if(str1.length > res.length) {
            res = str1
        }
        if(str2.length > res.length){
            res = str2
        }
    }
    return res
};
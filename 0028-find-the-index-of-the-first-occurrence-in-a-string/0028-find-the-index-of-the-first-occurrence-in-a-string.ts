function strStr(haystack: string, needle: string): number {
    const nlen = needle.length
    for(let i=0; i<haystack.length; i++) {
        if(haystack.charAt(i) === needle.charAt(0) && haystack.slice(i, i+nlen) === needle) {
            // console.log("mmm: ", haystack.slice(i, i+nlen))
            return i
        }
    }
    return -1
};
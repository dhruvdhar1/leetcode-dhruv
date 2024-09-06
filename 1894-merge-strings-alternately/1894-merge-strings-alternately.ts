function mergeAlternately(word1: string, word2: string): string {
    let p=0, q=0
    let res = ""

    while(p < word1.length && q < word2.length) {
        res += word1.charAt(p++)
        res += word2.charAt(q++)
    }
    while(p < word1.length) {
        res += word1.charAt(p++)
    }
    while(q < word2.length) {
        res += word2.charAt(q++)
    }
    return res
};
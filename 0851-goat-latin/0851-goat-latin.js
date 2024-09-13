/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const words = sentence.split(' ')
    const res = []
    for(let i=0; i<words.length; i++) {
        const word = words[i]
        let newWord = ''
        if(vowels.has(word.charAt(0))) {
            newWord = `${word}ma`
        } else {
            const ch = word.charAt(0)
            newWord = `${word.slice(1)}${ch}ma`
        }
        const suffix = "a".repeat(i+1)
        newWord = `${newWord}${suffix}`
        res.push(newWord)
    }
    return res.join(' ')
};
/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    const map = new Map()
    let window = 10000001
    for(let i=0; i<cards.length; i++) {
        const card = cards[i]
        
        if(map.has(card)) {
            const pos = map.get(card)    
            window = Math.min(window, i-pos+1)
        }
        map.set(card, i)
    }
    return window === 10000001 ? -1 : window
};
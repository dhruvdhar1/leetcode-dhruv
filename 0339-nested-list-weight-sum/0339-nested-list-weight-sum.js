/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

const backtrack = (list, depth) => {
    const res = []
    const iteratable = Array.isArray(list) ? list : list.getList();
    for(const el of iteratable) {
        if(!el.isInteger()) {
            const flat = backtrack(el, depth+1)
            res.push(...flat)
        } else {
            res.push([el, depth])
        }
    }
    return res
}
var depthSum = function(nestedList) {
    const flattened = backtrack(nestedList, 1)
    let sum = 0
    for(const el of flattened) {
        
        sum += (el[0].getInteger() * el[1])
    }
    console.log(flattened)
    return sum
};